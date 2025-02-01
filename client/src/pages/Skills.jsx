import React from "react";

function Skills({ skills }) {
  return (
    <section className="mb-16">
      <h2 className="text-sm font-medium text-neutral-400 mb-6">SKILLS</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-neutral-700 text-neutral-300 text-sm rounded hover:bg-neutral-200 transition-colors"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;