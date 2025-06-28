import React from 'react';
export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex justify-center px-4 pt-5">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          The page can't be found.
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          It looks like nothing was found at this location.
        </p>
      </div>
    </div>
  );
}