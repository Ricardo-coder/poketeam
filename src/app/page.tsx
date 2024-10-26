import { Heading } from "@/components/atoms";
import { BRAND } from "@/CONSTANTS";

export default function Home() {
  return (
    <div>
      <main>
        <Heading>{BRAND}</Heading>
      </main>
      <footer />
    </div>
  );
}
