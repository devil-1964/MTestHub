import React from "react";

function Passion({ passion }) {
  return (
    <section className="mb-16">
      <h2 className="text-sm font-medium text-neutral-400 mb-6">PASSION</h2>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-neutral-400">{passion.title}</span>
        <span className="text-neutral-200">{passion.description}</span>
      </div>
    </section>
  );
}

export default Passion;