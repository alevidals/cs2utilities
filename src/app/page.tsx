import { Heading } from "@/components/heading";
import { MapsList } from "@/components/maps/maps-list";

export default function Home() {
  return (
    <main>
      <Heading as="h2" className="text-center mb-4 uppercase font-extrabold">
        Welcome to Cs2Utilities! 🔫
      </Heading>
      <MapsList />
    </main>
  );
}
