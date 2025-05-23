import { useParams } from "react-router-dom";
import { type Hero } from "../../types/hero";
import heroesData from "../../data/characters.json";

export const HeroDetails = () => {
  const { id } = useParams();
  const hero = heroesData.find((e) => e.id === Number(id)) as Hero;

  if (!hero) {
    return <div>Hero not found!</div>;
  }

  return (
    <div>
      <h1>{hero.name}</h1>
      <img src={hero.image} alt={hero.name} />
      <p>Status: {hero.status}</p>
      <p>Species: {hero.species}</p>
    </div>
  );
};
