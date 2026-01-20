'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';

interface CodeCardProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

const highlightCode = (code: string, language: string = 'typescript'): React.ReactNode[] => {
  const lines = code.split('\n');
  
  return lines.map((line, lineIndex) => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    // Define keyword and syntax patterns
    const patterns = [
      { regex: /\b(export|default|function|const|let|var|if|else|for|while|return|import|from|class|interface|type|extends|implements|async|await|new|this|super)\b/g, class: 'keyword' },
      { regex: /\b(true|false|null|undefined|void|any|string|number|boolean|object)\b/g, class: 'primitive' },
      { regex: /(['"`])(?:(?=(\\?))\2.)*?\1/g, class: 'string' },
      { regex: /\/\/.*$/g, class: 'comment' },
      { regex: /\/\*[\s\S]*?\*\//g, class: 'comment' },
    ];

    let processedLine = line;
    const tokens: Array<{ text: string; class?: string }> = [];
    
    // Simple tokenizer
    const tokenize = (text: string) => {
      let content = text;
      const result: Array<{ text: string; class?: string }> = [];

      // Handle comments first
      const commentMatch = content.match(/\/\/.*$/);
      if (commentMatch) {
        const beforeComment = content.substring(0, commentMatch.index);
        tokenizeNonComment(beforeComment).forEach(t => result.push(t));
        result.push({ text: commentMatch[0], class: 'comment' });
        return result;
      }

      return tokenizeNonComment(content);
    };

    const tokenizeNonComment = (text: string) => {
      const tokens: Array<{ text: string; class?: string }> = [];
      let remaining = text;
      let index = 0;

      while (index < text.length) {
        let matched = false;

        // Check for strings
        const stringMatch = remaining.match(/^(['"`])(.*?)\1/);
        if (stringMatch) {
          tokens.push({ text: stringMatch[0], class: 'string' });
          index += stringMatch[0].length;
          remaining = text.substring(index);
          matched = true;
          continue;
        }

        // Check for keywords
        const keywordMatch = remaining.match(/^(export|default|function|const|let|var|if|else|for|while|return|import|from|class|interface|type|extends|implements|async|await|new|this|super)\b/);
        if (keywordMatch) {
          tokens.push({ text: keywordMatch[0], class: 'keyword' });
          index += keywordMatch[0].length;
          remaining = text.substring(index);
          matched = true;
          continue;
        }

        // Check for primitives
        const primitiveMatch = remaining.match(/^(true|false|null|undefined|void|any|string|number|boolean|object)\b/);
        if (primitiveMatch) {
          tokens.push({ text: primitiveMatch[0], class: 'primitive' });
          index += primitiveMatch[0].length;
          remaining = text.substring(index);
          matched = true;
          continue;
        }

        // Regular character
        if (!matched) {
          const char = text[index];
          if (tokens.length > 0 && !tokens[tokens.length - 1].class) {
            tokens[tokens.length - 1].text += char;
          } else {
            tokens.push({ text: char });
          }
          index++;
          remaining = text.substring(index);
        }
      }

      return tokens;
    };

    const tokens_ = tokenize(line);

    return (
      <div key={lineIndex} className="flex">
        <span className="inline-block w-12 text-right pr-4 text-gray-500 select-none">
          {lineIndex + 1}
        </span>
        <span className="flex-1">
          {tokens_.map((token, tokenIndex) => (
            <span
              key={tokenIndex}
              className={cn({
                'text-blue-600 font-semibold': token.class === 'keyword',
                'text-green-600': token.class === 'string',
                'text-purple-600 font-semibold': token.class === 'primitive',
                'text-gray-500 italic': token.class === 'comment',
              })}
            >
              {token.text}
            </span>
          ))}
        </span>
      </div>
    );
  });
};

export function CodeCard({
  code,
  language = 'typescript',
  title,
  className,
}: CodeCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden',
        className
      )}
    >
      {title && (
        <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      
      <div className="relative">
        <Button
          onClick={handleCopy}
          className="absolute right-4 top-4 p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          title="Skopiuj kod"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4 text-gray-600" />
          )}
        </Button>

        <pre className="p-4 bg-white text-sm overflow-x-auto">
          <code className="font-mono text-gray-800 leading-relaxed">
            {highlightCode(code, language)}
          </code>
        </pre>
      </div>
    </div>
  );
}
