import { Heading } from "@/components/atoms";
import { Label } from "@/components/atoms/Label/Label";
import { BRAND } from "@/CONSTANTS";

export default function Home() {
  return (
    <div>
      <header>
        <Heading>{BRAND}</Heading>
      </header>
      <main>
        <Label tag="p">teste</Label>
      </main>
      <footer></footer>
    </div>
  );
}
