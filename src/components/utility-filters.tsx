import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { TeamFilter, UtilityTypeFilter } from "@/lib/types";
import { getHref } from "@/lib/utils";
import { IconEraser } from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function UtilityFilters() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const teamParam = (searchParams.get("team") as TeamFilter) ?? "";
  const utilityTypeParam =
    (searchParams.get("utility-type") as UtilityTypeFilter) ?? "";

  return (
    <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 mb-4">
      <Select
        value={teamParam}
        onValueChange={(key) => {
          const href = getHref({
            action: "set",
            searchParams,
            pathname,
            paramsToSet: [{ team: key }],
          });

          router.replace(href);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select the team" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="ct">CT</SelectItem>
            <SelectItem value="t">T</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        value={utilityTypeParam}
        onValueChange={(key) => {
          const href = getHref({
            action: "set",
            searchParams,
            pathname,
            paramsToSet: [{ "utility-type": key }],
          });

          router.replace(href);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select the utility" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="smoke">Smoke</SelectItem>
            <SelectItem value="molotov">Molotov</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        size="icon"
        variant="destructive"
        className="shrink-0 w-full md:w-9"
        onClick={() => {
          const href = getHref({
            action: "delete",
            pathname,
            searchParams,
            paramsToDelete: ["team", "utility-type"],
          });

          router.replace(href);
        }}
      >
        <IconEraser />
      </Button>
    </div>
  );
}
