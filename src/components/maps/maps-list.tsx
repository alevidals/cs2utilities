import { MapCard } from "@/components/maps/map-card";
import maps from "../../data/maps.json";

export function MapsList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {maps.map((map) => (
        <MapCard
          key={map.slug}
          name={map.name}
          image={map.image}
          slug={map.slug}
        />
      ))}
    </div>
  );
}
