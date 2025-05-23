import { Link } from "react-router-dom";
import { type Location } from "../../types/location";
import locationData from "../../data/location.json";
import { useSorting } from "../../hooks/useSorting";
import { sortByCreated } from "../../utils/sorted";
import { SortButton } from "../../components";

const typedlocationData = locationData as Location[];

export const Locations = () => {
  const { sortMode, toggleSort } = useSorting("heroes");
  const displayedLocation = sortByCreated(typedlocationData, sortMode);

  return (
    <div>
      <h1>List of locations:</h1>
      <SortButton sortMode={sortMode} onClick={toggleSort} />
      <div>
        {displayedLocation.map((location) => (
          <Link to={`/locations/${location.id}`} key={location.id}>
            <h3>{location.name}</h3>
            <p>Created: {new Date(location.created).toLocaleDateString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
