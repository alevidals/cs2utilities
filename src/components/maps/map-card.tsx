import { Heading } from "@/components/heading";
import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  name: string;
  image: string;
};

export function MapCard(props: Props) {
  return (
    <Link
      className="rounded-xl relative group overflow-hidden w-full h-48"
      href={`/maps/${props.slug}`}
    >
      <Heading
        as="h3"
        className="absolute w-full h-full flex items-center justify-center text-white z-20 group-hover:text-3xl ease-in-out duration-300"
      >
        {props.name}
      </Heading>
      <div className="w-full h-full bg-black/30 absolute z-10 group-hover:bg-black/10 transition-colors ease-in-out duration-300" />
      <Image
        src={props.image}
        alt={props.name}
        fill
        className="group-hover:scale-110 transition-transform ease-in-out duration-300"
      />
    </Link>
  );
}
