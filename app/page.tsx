import { CodeCard } from "@/components/ui/code-card";
import { CONTAINER_TEXT_CODE } from "@/constants/textCodes";

export default function Home() {
  return (
    <CodeCard
        code={CONTAINER_TEXT_CODE}
        title="container.tsx"
    />
  );
}
