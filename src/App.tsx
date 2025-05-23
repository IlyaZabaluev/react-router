import { Route, Routes } from "react-router-dom";
import {
  Home,
  NotFound,
  Heroes,
  Episodes,
  HeroDetails,
  LocationDetails,
  EpisodeDetails,
  Locations,
} from "./pages";
import { Navbar } from "./components";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/heroes/:id" element={<HeroDetails />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<LocationDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<EpisodeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
