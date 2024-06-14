import { Heading } from "@/components/heading";
import Link from "next/link";

export function Header() {
  return (
    <header className="h-16 flex items-center justify-center border p-3 rounded-xl mb-4">
      {/* TODO: insert page icon or text */}
      <Link href="/">
        <Heading as="h1" className="text-xl">
          [insert icon]
        </Heading>
      </Link>
    </header>
  );
}
