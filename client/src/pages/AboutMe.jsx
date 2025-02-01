import React from "react";

function AboutMe({ aboutme }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
      <p className="text-gray-700 mb-2"><strong>Name:</strong> {aboutme.name}</p>
      <p className="text-gray-700 mb-2"><strong>College:</strong> {aboutme.college}</p>
      <p className="text-gray-700 mb-2"><strong>Passing Year:</strong> {aboutme.passingYear}</p>
      <p className="text-gray-700 mb-2"><strong>Aggregate:</strong> {aboutme.aggregate}</p>
      <p className="text-gray-700"><strong>Description:</strong> {aboutme.description}</p>
    </div>
  );
}

export default AboutMe;