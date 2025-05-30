import { useParams } from "react-router-dom";
import { type Hero } from "../../types/hero";
import { useEffect, useState } from "react";
import { api } from "../../api/apiClients";

export const HeroDetails = () => {
  const { id } = useParams();
  const [hero, setHero] = useState<Hero | null>(null);

  useEffect(() => {
    api.heroes.getById(Number(id)).then(setHero);
  }, [id]);

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
