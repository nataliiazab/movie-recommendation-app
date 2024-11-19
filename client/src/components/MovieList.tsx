import React, { useState } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieCard from "./MovieCard";
import Loader from "./Loader";

const MovieList: React.FC = () => {
  const { movies, loading, error } = useFetchMovies();
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6; // Number of movies per page

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  // Calculate the movies to display on the current page
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Total number of pages
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  // Handle next and previous page navigation
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      <h2 className="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8">
        Movie List
      </h2>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300"
        >
          Prev
        </button>
        <span className="text-xl font-bold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
