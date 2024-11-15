// client/src/components/MovieList.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

type Movie = {
  id: number;
  title: string;
  description: string;
  rating: number;
  genre: string;
  year: number;
  image: string;
};

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch movies from your backend API
    axios
      .get("https://movie-recommendation-app-server.vercel.app/movies")
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-3xl shadow-md">
      <h2 className="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8">
        Movie List
      </h2>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
