import { useLocation } from 'react-router-dom';
import { MovieGallery, MovieGalleryItem, LinkMovie } from './Gallery.styled';

export function ListMovie({ arrFilm, linkPart = '' }) {
  const location = useLocation();

  if (arrFilm.length < 1) {
    return;
  }

  return (
    <>
      <MovieGallery>
        {arrFilm.map(e => {
          return (
            <MovieGalleryItem key={e.id}>
              <LinkMovie to={`${linkPart}${e.id}`} state={{ from: location }}>
                {e.title}
              </LinkMovie>
            </MovieGalleryItem>
          );
        })}
      </MovieGallery>
    </>
  );
}
