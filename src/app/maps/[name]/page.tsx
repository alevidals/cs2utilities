"use client";

import { MapBanner } from "@/components/map-banner";

import { UtilitiesList } from "@/components/utilities-list";
import { UtilityFilters } from "@/components/utility-filters";
import maps from "@/data/maps.json";
import type { TeamFilter, Utility, UtilityTypeFilter } from "@/lib/types";
import { notFound, useSearchParams } from "next/navigation";
import { useState } from "react";

type Props = {
  params: { name: string };
};

type FilterUtilitiesArgs = {
  utilities: Utility[];
  teamFilter: TeamFilter;
  uilityTypeFilter: UtilityTypeFilter;
};

function filterUtilities(args: FilterUtilitiesArgs) {
  const { utilities, teamFilter, uilityTypeFilter } = args;

  let filteredUtilities = [...(utilities ?? [])];

  if (teamFilter && teamFilter !== "all") {
    filteredUtilities = filteredUtilities.filter(
      (utility) => utility.team === teamFilter,
    );
  }

  if (uilityTypeFilter && uilityTypeFilter !== "all") {
    filteredUtilities = filteredUtilities.filter(
      (utility) => utility.type === uilityTypeFilter,
    );
  }

  return filteredUtilities;
}

export default function MapPage(props: Props) {
  const map = maps.find((map) => map.slug === props.params.name);

  if (!map) return notFound();

  const searchParams = useSearchParams();

  const [selectedUtility, setSelectedUtility] = useState<Utility>(
    map.utilities[0],
  );

  const teamParam = (searchParams.get("team") as TeamFilter) ?? "";
  const utilityTypeParam =
    (searchParams.get("utility-type") as UtilityTypeFilter) ?? "";

  const filteredUtilities = filterUtilities({
    utilities: map.utilities,
    teamFilter: teamParam,
    uilityTypeFilter: utilityTypeParam,
  });

  const utilities = filteredUtilities.map((utility) => utility.name);

  function handleOnChangeSelectedUtility(utilityName: string) {
    const utility = map?.utilities.find(
      (utility) => utility.name === utilityName,
    );

    if (!utility) {
      // TODO: soner
      return;
    }

    setSelectedUtility(utility);
  }

  return (
    <div>
      <MapBanner title={map.name} imageUrl={map.image} />
      <div className="flex flex-col items-center">
        <div className="w-full">
          <UtilityFilters />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <UtilitiesList
            utilities={utilities}
            selectedUtility={selectedUtility}
            setSelectedUtility={handleOnChangeSelectedUtility}
          />
          <div className="h-[35rem] flex items-center justify-center">
            <video
              src={selectedUtility.video}
              className="aspect-video max-h-full w-full rounded-xl"
              muted
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
}
