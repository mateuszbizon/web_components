import { CodeCard } from "@/components/ui/code-card";
import Container from "@/components/ui/container";
import { CONTAINER_TEXT_CODE, FOOTER_TEXT_CODE, GLOBALS_CSS_TEXT_CODE, HERO_TEXT_CODE, ROOT_LAYOUT_TEXT_CODE, SHADOW_TEXT_CODE, SUB_PAGE_HEADER_TEXT_CODE } from "@/constants/textCodes";

export default function Home() {
  return (
    <Container className="space-y-10">
        <CodeCard
            code={CONTAINER_TEXT_CODE}
            title="container.tsx"
        />
        <CodeCard
            code={SHADOW_TEXT_CODE}
            title="shadow.tsx"
        />
        <CodeCard
            code={HERO_TEXT_CODE}
            title="Hero.tsx"
        />
        <CodeCard
            code={GLOBALS_CSS_TEXT_CODE}
            title="globals.css"
        />
        <CodeCard
            code={SUB_PAGE_HEADER_TEXT_CODE}
            title="SubPageHeader.tsx"
        />
        <CodeCard
            code={FOOTER_TEXT_CODE}
            title="Footer.tsx"
        />
        <CodeCard
            code={ROOT_LAYOUT_TEXT_CODE}
            title="layout.tsx"
        />
    </Container>
  );
}
