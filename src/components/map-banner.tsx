import { Heading } from "@/components/heading";
import Image from "next/image";

type Props = {
  title: string;
  imageUrl: string;
};

export function MapBanner(props: Props) {
  const { title, imageUrl } = props;

  return (
    <div className="w-full h-40 relative rounded-xl overflow-hidden mb-4">
      <Heading
        as="h2"
        className="absolute w-full h-full flex justify-center items-center z-20"
      >
        {title}
      </Heading>
      <div className="w-full h-full bg-black/30 absolute z-10" />
      <Image src={imageUrl} alt={title} fill className="object-cover" />
    </div>
  );
}
