import React from 'react';

const RevealCard = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-lg mx-auto my-10 relative overflow-hidden">
      <h2 className="text-xl font-semibold mb-2">
        Beautify your website within minutes
      </h2>
      <p className="text-gray-400 mb-4">
        With Aceternity UI, you can build great looking websites within minutes.
      </p>
      <div className="relative group">
        <span className="text-4xl font-extrabold block transition-transform duration-500 ease-in-out group-hover:translate-x-[-100%]">
          Copy paste this
        </span>
        <span className="text-4xl font-extrabold text-gray-600 absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:animate-[sparkle_1.5s_infinite]">
          reveal
        </span>
      </div>
    </div>
  );
};

export default RevealCard;
