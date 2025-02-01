import React from "react";

function Skills({ skills }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;