import React from "react";
import MovieList from "./components/MovieList";

const App: React.FC = () => {
  return (
    <div>
      <h1>header</h1>
      <MovieList />
      <h1>footer</h1>
    </div>
  );
};

export default App;
