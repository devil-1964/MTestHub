import React from "react";

function AcademicBackground({ academics }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Academic Background</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Graduation</h3>
          <p className="text-gray-700"><strong>College:</strong> {academics.graduation.college}</p>
          <p className="text-gray-700"><strong>Branch:</strong> {academics.graduation.branch}</p>
          <p className="text-gray-700"><strong>CGPA:</strong> {academics.graduation.cgpa}</p>
        </div>
      </div>
    </div>
  );
}

export default AcademicBackground;