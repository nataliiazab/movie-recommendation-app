//client/src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-sm font-light">
            &copy; {new Date().getFullYear()} Movie Finder. Developed by Nataliia Zablotska.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
