// client/src/components/MovieList.tsx
import React from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieCard from "./MovieCard";
import Loader from "./Loader";

const MovieList: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 12;
  const { movies, loading, error, totalPages } = useFetchMovies(
    currentPage,
    pageSize
  );

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
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

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
