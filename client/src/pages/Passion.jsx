import React from "react";

function Passion({ passion }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Passion</h2>
      <p className="text-gray-700"><strong>{passion.title}:</strong> {passion.description}</p>
    </div>
  );
}

export default Passion;