import * as api from '../../service/servive-api';
import { useSearchParams, useLocation } from 'react-router-dom';
import Searchbar from 'components/SearchForm/SearchForm';

function SearchMovies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearcMovies] = useState([]);

  const movieQuery = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!movieQuery) {
      return;
    }
    api.fetchSearchMovie(movieQuery).then(res => {
      setSearcMovies([...res.results]);
    });
  }, [movieQuery]);

  const searchFormSubmit = newSearchQuery => {
    if (movieQuery !== newSearchQuery) {
      setSearcMovies([]);
      setSearchParams({ query: `${newSearchQuery}` });
    }
  };
  return (
    <>
      <Searchbar onSubmit={searchFormSubmit} query={movieQuery} />
      {searchMovies && (
        <List>
          {searchMovies.map(movie => (
            <Link key={movie.id}>
              <NavLink
                to={`${movie.id}`}
                state={{ from: location }}
                className={style.movie_title}
              >
                <Img
                  src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
                  alt={movie.original_title}
                  className={style.img}
                />
                <MovieTitle> {movie.original_title}</MovieTitle>
              </NavLink>
            </Link>
          ))}
        </List>
      )}
    </>
  );
}
export default SearchMovies;
