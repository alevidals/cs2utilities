import { Heading } from "@/components/heading";
import maps from "@/data/maps.json";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: { name: string };
};

export default function MapPage(props: Props) {
  const map = maps.find((map) => map.slug === props.params.name);

  if (!map) return notFound();

  return (
    <div>
      <div className="w-full h-40 relative rounded-xl overflow-hidden">
        <Heading
          as="h2"
          className="absolute w-full h-full flex justify-center items-center z-20"
        >
          {map.name}
        </Heading>
        <div className="w-full h-full bg-black/30 absolute z-10" />
        <Image src={map.image} alt={map.name} fill className="object-cover" />
      </div>
    </div>
  );
}
