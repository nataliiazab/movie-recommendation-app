//client/src/hooks/useFetchMovies.ts
import { useEffect, useState } from "react";
import axios from "axios";

type Movie = {
  id: number;
  title: string;
  description: string;
  rating: number;
  genre: string;
  year: number;
  image: string;
};

const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://movie-recommendation-app-server.vercel.app/movies"
        );
        setMovies(response.data);
      } catch (err) {
        setError("Error fetching movies.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export default useFetchMovies;
