import { CodeCard } from "@/components/ui/code-card";
import Container from "@/components/ui/container";
import { CONTAINER_TEXT_CODE } from "@/constants/textCodes";

export default function Home() {
  return (
    <Container>
        <CodeCard
            code={CONTAINER_TEXT_CODE}
            title="container.tsx"
        />
    </Container>
  );
}
