import { Route, Routes } from "react-router-dom";
import { Cast } from "./Casts/Casts";
import { Home } from "./Home/Home";
import { Layout } from "./Layout/Layout";
import { Movie } from "./Movie/Movi";
import { MovieDetail } from "./MovieDatail/MovieDetail";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/movies' element={<Movie />} />
        <Route path='/movies/:id' element={<MovieDetail />} >
          <Route path='/movies/:id/cast' element={<Cast />} />
        </Route>
      </Route>

    </Routes>

  );
};
