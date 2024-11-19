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

const useFetchMovies = (currentPage: number, pageSize: number) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = `https://movie-recommendation-app-server.vercel.app/movies?page=${currentPage}&limit=${pageSize}`;
        console.log("Fetching from:", url); // Log the request URL for debugging
        const response = await axios.get(url);
        setMovies(response.data.movies);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        setError("Error fetching movies.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage, pageSize]);

  return { movies, loading, error, totalPages };
};

export default useFetchMovies;
