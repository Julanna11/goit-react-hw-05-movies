const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '747562f74d09cadb39078a0f964b6b27';
let trendingMovie = 'trending/movie/day';

export function getTrendingFilms() {
  return fetch(`${BASE_URL}${trendingMovie}?api_key=${API_KEY}`).then(respons =>
    respons.json()
  );
}

export function getMovieDetails(id) {
  return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`).then(
    respons => respons.json()
  );
}

export function getFilmsSearch(name) {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${name}`).then(
    respons => respons.json()
  );
}

export function getCast(id) {
  return fetch(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then(respons => respons.json());
}

export function getReviews(id) {
  return fetch(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  ).then(respons => respons.json());
}
