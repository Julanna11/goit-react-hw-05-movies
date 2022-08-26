// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchReviews } from '../../service/servive-api';

// export default function useFetchMovieReviews() {
//   const { movieId } = useParams();
//   const [reviews, setReviews] = useState();
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchReviews(movieId)
//       .then(data => {
//         if (data.length === 0) {
//           setError('Відгуки відсутні');
//           return;
//         }

//         setReviews(data);
//       })
//       .catch(error => setError(error.message));
//   }, [movieId]);
//   return { reviews, error };
// }
