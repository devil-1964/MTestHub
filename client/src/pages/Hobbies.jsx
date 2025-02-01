import React from "react";

function Hobbies({ hobbies }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Hobbies</h2>
      <ul className="space-y-2">
        {hobbies.map((hobby, index) => (
          <li key={index} className="text-gray-700">
            <strong>{hobby.name}:</strong> {hobby.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hobbies;