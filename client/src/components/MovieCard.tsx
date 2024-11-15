import { useState } from "react";


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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!movie) {
    return (
      <div className="flex justify-center items-center p-6 bg-gray-100 rounded-lg shadow-md">
        <p className="text-gray-500 animate-pulse">Loading movie details...</p>
      </div>
    );
  }

  return (
    <li
      key={movie.id}
      className="bg-white rounded-xl border border-gray-200 p-4"
      role="button"
      aria-label={`View details about ${movie.title}`}
    >
      {/* Movie Poster */}
      <div className="relative overflow-hidden rounded-lg">
        {!imageLoaded && !imageError && (
          <div className="bg-gray-200 animate-pulse w-full h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-sm">Loading image...</p>
          </div>
        )}
        <img
          src={
            imageError
              ? "fallback-image-url.jpg"
              : movie.image ||
                "https://mnlht.com/wp-content/uploads/2017/06/no_image_placeholder.png"
          }
          alt={movie.title || "Movie poster"}
          className={`w-full h-64 object-cover rounded-lg transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          ⭐ {movie.rating.toFixed(1)}
        </div>
      </div>

      {/* Movie Details */}
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {movie.title}
        </h3>
        <div className="flex flex-wrap gap-2 text-sm text-gray-600 mt-2">
          <span className="bg-gray-100 rounded-full px-3 py-1">
            {movie.genre}
          </span>
          <span className="bg-gray-100 rounded-full px-3 py-1">
            {movie.year}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-3 line-clamp-3">
          {movie.description}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-between items-center">
        <button className="bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
          View Details
        </button>
        <button
          className="text-indigo-500 text-sm font-semibold hover:underline"
          onClick={() => console.log(`Bookmarking movie: ${movie.title}`)}
        >
          Bookmark
        </button>
      </div>
    </li>
  );
};

export default MovieCard;
