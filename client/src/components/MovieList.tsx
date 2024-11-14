// client/src/components/MovieList.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  description: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch movies from your backend API
    axios
      .get("http://localhost:4000/movies") // Update URL for production (on Vercel)
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
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
