//client/src/components/Loader.tsx
import React from "react";

const Loader: React.FC = () => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    {/* Loader Container with Simple Design */}
    <div className="relative flex justify-center items-center">
      {/* Outer Circle with minimalistic border and subtle animation */}
      <div className="absolute w-24 h-24 border-4 border-t-4 border-transparent rounded-full animate-spin opacity-30 border-gray-300"></div>

      {/* Inner Spinner with reduced size and smooth spin */}
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-gray-500 border-solid"></div>
    </div>

    {/* Main Loading Text */}
    <span className="absolute top-1/2 transform -translate-y-1/2 text-gray-600 font-medium text-lg opacity-80">
      Just a moment...
    </span>

    {/* Additional Message: Reinforcing positive messaging and transparency */}
    <div className="absolute bottom-8 text-gray-500 text-sm opacity-70">
      Please hold on while we prepare your experience.
    </div>
  </div>
);

export default Loader;
