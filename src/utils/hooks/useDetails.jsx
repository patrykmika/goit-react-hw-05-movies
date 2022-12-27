import { fetchDetails } from 'utils/api/fetchMovies';
import { useState, useEffect } from 'react';

export const useDetails = movieId => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movieId)
      fetchDetails(movieId).then(res => {
        setMovie({ ...res });
      });
  }, [movieId]);

  return { movie };
};
