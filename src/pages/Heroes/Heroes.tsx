import { Link } from "react-router-dom";
import { type Hero } from "../../types/hero";
import heroesData from "../../data/characters.json";
import { useSorting } from "../../hooks/useSorting";
import { sortByCreated } from "../../utils/sorted";
import { SortButton } from "../../components";

const typedHeroesData = heroesData as Hero[];

export const Heroes = () => {
  const { sortMode, toggleSort } = useSorting("heroes");
  const displayedHeroes = sortByCreated(typedHeroesData, sortMode);

  return (
    <div>
      <h1>List of heroes:</h1>
      <SortButton sortMode={sortMode} onClick={toggleSort} />
      <div>
        {displayedHeroes.map((hero) => (
          <Link to={`/heroes/${hero.id}`} key={hero.id}>
            <h3>{hero.name}</h3>
            <p>Created: {new Date(hero.created).toLocaleDateString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
