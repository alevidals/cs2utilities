import { Button } from "@/components/ui/button";

export type Props = {
  name: string;
};

export function UtilityItem(props: Props) {
  return <Button className="w-full">{props.name}</Button>;
}
