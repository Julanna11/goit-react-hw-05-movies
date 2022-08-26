// import { useState, useEffect } from 'react';
// import { fetchTrendingMovies } from '../../service/servive-api';

// export const useFetchTrending = () => {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchTrendingMovies()
//       .then(data => {
//         setMovies(data);

//         if (data.length === 0) {
//           setError('Контент відсутній');
//         }
//       })
//       .catch(error => setError(error.message));
//   }, []);

//   return { movies, error };
// };
