import { getFilmsSearch } from '../service/servive-api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ListMovie } from '../components/Gallery/Gallery';
import {
  SearchbarHeader,
  SearchForm,
  ButtonSearchForm,
  ButtonLabelSearchForm,
  SearchFormIinput,
} from '../components/SearchForm/SearchForm.styled';

export const Movies = () => {
  const [searchFilm, setSearchFilm] = useState('');
  const [searchFilmArray, setSearchFilmArray] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('params')) {
      return;
    }
    setSearchFilm(searchParams.get('params'));
    getFilmsSearch(searchParams.get('params')).then(setSearchFilmArray);
  }, [searchParams]);

  const handleChange = e => {
    setSearchFilm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ params: searchFilm });
    getFilmsSearch(searchFilm).then(setSearchFilmArray);
  };

  return (
    <div>
      <SearchbarHeader>
        <SearchForm onSubmit={handleSubmit}>
          <ButtonSearchForm type="submit">
            <ButtonLabelSearchForm>Search</ButtonLabelSearchForm>
          </ButtonSearchForm>

          <SearchFormIinput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search movies"
            value={searchFilm}
            onChange={handleChange}
          />
        </SearchForm>
      </SearchbarHeader>
      {searchFilmArray && <ListMovie arrFilm={searchFilmArray.results} />}
    </div>
  );
};
