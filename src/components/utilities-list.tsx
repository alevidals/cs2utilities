import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Utility } from "@/lib/types";

type Props = {
  utilities: string[];
  selectedUtility: Utility;
  setSelectedUtility: (utilityName: string) => void;
};

export function UtilitiesList(props: Props) {
  return (
    <>
      <div className="hidden md:block border p-4 rounded-xl w-80 h-[35rem] overflow-y-scroll shrink-0 scrollbar-hide">
        <RadioGroup
          defaultValue={props.selectedUtility.name}
          onValueChange={(utility) => {
            props.setSelectedUtility(utility);
          }}
        >
          {props.utilities.map((utility) => (
            <div key={utility} className="flex items-center space-x-2">
              <RadioGroupItem value={utility} id={utility} />
              <Label htmlFor={utility}>{utility}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <Select
        value={props.selectedUtility.name}
        onValueChange={(utility) => {
          props.setSelectedUtility(utility);
        }}
      >
        <SelectTrigger className="w-full md:hidden">
          <SelectValue placeholder="Select the utility" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {props.utilities.map((utility) => (
              <SelectItem key={utility} value={utility}>
                {utility}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
