import { UtilityItem } from "@/components/utility-item";

type Props = {
  utilities: { name: string }[];
};

export function UtilitiesList(props: Props) {
  return (
    <ul className="flex flex-col gap-y-4">
      {props.utilities.map((utility) => (
        <li key={utility.name}>
          <UtilityItem name={utility.name} />
        </li>
      ))}
    </ul>
  );
}
