//client/src/components/Header.tsx

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white flex justify-between items-center rounded-b-xl shadow-xl">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-bold tracking-tight uppercase">
          Movie Finder
        </h1>
        <p className="text-sm font-semibold">
          Find the next movie to watch.
        </p>
      </div>
      <nav className="space-x-6 text-lg font-medium hidden sm:flex">
        <a
          href="#"
          className="hover:text-gray-200 transition-colors duration-200"
        >
          Movies
        </a>
        <a
          href="#about"
          className="hover:text-gray-200 transition-colors duration-200"
        >
          About
        </a>
        <a
          href="#contact"
          className="hover:text-gray-200 transition-colors duration-200"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
