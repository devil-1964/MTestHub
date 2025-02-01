import React from "react";

function Hobbies({ hobbies }) {
  return (
    <section className="mb-16">
      <h2 className="text-sm font-medium text-neutral-400 mb-6">HOBBIES</h2>
      <div className="space-y-6">
        {hobbies.map((hobby, index) => (
          <div key={index} className="flex flex-col gap-1">
            <span className="text-sm text-neutral-400">{hobby.name}</span>
            <span className="text-neutral-200">{hobby.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hobbies;