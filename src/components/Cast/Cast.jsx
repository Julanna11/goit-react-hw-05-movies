import { useParams } from 'react-router-dom';
import { getCast } from '../../service/servive-api';
import { useState, useEffect } from 'react';
import {
  CastGallery,
  CastGalleryItem,
  CastGalleryItemImage,
  CastTitle,
  GalleryTitle,
} from './CastGal.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export function Cast() {
  const [actors, setActors] = useState();
  const { id } = useParams();

  useEffect(() => {
    getCast(id).then(e => setActors(e.cast));
  }, [id]);

  if (!actors) {
    return;
  }

  return (
    <div>
      <CastGallery>
        {actors.map(e => {
          return (
            <CastGalleryItem key={e.name}>
              {e.profile_path && (
                <CastGalleryItemImage
                  src={`${BASE_IMG_URL}${e.profile_path}`}
                  alt={e.name}
                />
              )}
              <CastTitle>{e.name}</CastTitle>
              <GalleryTitle>Character: {e.character}</GalleryTitle>
            </CastGalleryItem>
          );
        })}
      </CastGallery>
    </div>
  );
}
