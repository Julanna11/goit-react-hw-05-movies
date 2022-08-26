import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/HomeVeiw';
import { Movies } from '../pages/Movies';
// import { MovieDetails } from '../movieDetails/movieDetails';
// import { Cast } from '../components/Cast/Cast';
import { Reviews } from '../components/Rewies/Reviews';
import { NotFound } from 'pages/NotFound';
import { Link, SiteNav } from './Navigaton/Navigation.styled';
import { Header } from './Layout/Layout.styled';
import Loader from 'pages/Loader';

const MovieDetails = lazy(() =>
  import('./MovieDetails/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);

export const App = () => {
  return (
    <>
      <Header>
        <SiteNav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </SiteNav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
