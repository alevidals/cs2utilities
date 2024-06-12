import { Heading } from "@/components/heading";

export function Header() {
  return (
    <header className="h-16 flex items-center justify-center border p-3 rounded-xl mb-4">
      <Heading as="h1" className="text-xl">
        cs2utilities
      </Heading>
    </header>
  );
}
