import { useParams } from "react-router-dom";
import { type Location } from "../../types/location";
import locationData from "../../data/location.json";

export const LocationDetails = () => {
  const { id } = useParams();
  const location = locationData.find((e) => e.id === Number(id)) as Location;

  if (!location) {
    return <div>Location not found!</div>;
  }

  return (
    <div>
      <h1>{location.name}</h1>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
    </div>
  );
};
