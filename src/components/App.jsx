import { Route, Routes } from "react-router-dom";
import { Cast } from "./Casts/Casts";
import { Home } from "../page/Home/Home";
import { Layout } from "../page/Layout/Layout";
import { Movie } from "../page/Movie/Movie";
import { MovieDetail } from "./MovieDatail/MovieDetail";
import { Reviews } from "./Reviews/Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/movies' element={<Movie />} />
        <Route path='/movies/:id' element={<MovieDetail />} >
          <Route path='/movies/:id/cast' element={<Cast />} />
          <Route path='/movies/:id/reviews' element={<Reviews />} />
        </Route>
      </Route>

    </Routes>

  );
};
