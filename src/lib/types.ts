export type Map = {
  name: string;
  slug: string;
  image: string;
  utilities: Utility[];
};

export type Utility = {
  name: string;
  video: string;
  team: string;
  type: string;
  // TODO: move to typescript instead json
  // team: "T" | "CT";
  // type: "SMOKE" | "MOLOTOV";
};

export type TeamFilter = "t" | "ct" | "all";
export type UtilityTypeFilter = "smoke" | "molotov" | "all";
