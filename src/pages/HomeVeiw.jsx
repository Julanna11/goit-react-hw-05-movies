import { PageHeading } from 'components/PageHeading/PageHeading';
import { getTrendingFilms } from '../service/servive-api';
import { useState, useEffect } from 'react';
import { ListMovie } from '../components/Gallery/Gallery';

export const Home = () => {
  const [totalList, setTotalList] = useState(null);

  useEffect(() => {
    getTrendingFilms().then(e => setTotalList(e.results));
  }, []);

  if (!totalList) {
    return;
  }

  return (
    <>
      <PageHeading pageHeading="Trending today" />
      <ListMovie arrFilm={totalList} linkPart="movies/" />
    </>
  );
};
