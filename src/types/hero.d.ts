export interface Hero {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: "Alien" | "Human";
  type?: string;
  gender: "Male" | "Female" | "unknown";
  image: string;
  created: string;
}
