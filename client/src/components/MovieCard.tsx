import React from "react";

type Movie = {
  id: number;
  title: string;
  description: string;
  rating: number;
  genre: string;
  year: number;
  image: string;
};

const MovieCard = ({ movie }: { movie: Movie }) => {
  if (!movie) {
    return (
      <div className="flex justify-center items-center p-6 bg-gray-100 rounded-lg">
        <p className="text-gray-500 animate-pulse">Loading movie details...</p>
      </div>
    );
  }

  return (
    <li
      key={movie.id}
      className="bg-white rounded-xl border border-gray-200 p-4 transform transition-transform duration-300"
    >
      <img
        src={movie.image || "placeholder-image-url.jpg"}
        alt={movie.title || "Movie poster"}
        className="w-full h-64 object-cover rounded-lg mb-4"
        onError={(e) => (e.currentTarget.src = "fallback-image-url.jpg")}
      />
      <h3 className="text-lg font-bold text-gray-800 truncate">
        {movie.title}
      </h3>
      <p className="text-gray-600 text-sm mt-2">
        <span className="font-medium">Rating:</span> {movie.rating}
      </p>
      <p className="text-gray-600 text-sm">
        <span className="font-medium">Genre:</span> {movie.genre}
      </p>
      <p className="text-gray-600 text-sm">
        <span className="font-medium">Year:</span> {movie.year}
      </p>
      <p className="text-gray-600 text-sm mt-2 line-clamp-3">
        {movie.description}
      </p>
    </li>
  );
};

export default MovieCard;
