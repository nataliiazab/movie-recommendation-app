//client/src/App.tsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
};

export default App;
