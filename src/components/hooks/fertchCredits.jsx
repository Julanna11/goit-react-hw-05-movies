// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchCast } from '../../service/servive-api';

// export default function useFetchMovieCredits() {
//   const { movieId } = useParams();
//   const [credits, setCredits] = useState();
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchCast(movieId)
//       .then(data => {
//         if (data.length === 0) {
//           setError('Інформація про акторський склад відсутня');
//           return;
//         }

//         setCredits(data);
//       })
//       .catch(error => setError(error.message));
//   }, [movieId]);
//   return { credits, error };
// }
