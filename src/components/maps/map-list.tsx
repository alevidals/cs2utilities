import maps from "../../data/maps.json";

export function MapList() {
  return (
    <div className="grid grid-cols-3">
      {maps.map((map) => (
        <div key={map.slug}>
          <h2>{map.name}</h2>
          <img src={map.image} alt={map.name} />
        </div>
      ))}
    </div>
  );
}
