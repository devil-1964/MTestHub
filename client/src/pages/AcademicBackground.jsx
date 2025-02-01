import React from "react";

function AcademicBackground({ academics }) {
  return (
    <section className="mb-16">
      <h2 className="text-sm font-medium text-neutral-400 mb-6">EDUCATION</h2>
      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-neutral-400">College</span>
          <span className="text-neutral-200">{academics.graduation.college}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-neutral-400">Branch</span>
          <span className="text-neutral-200">{academics.graduation.branch}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-neutral-400">CGPA</span>
          <span className="text-neutral-200">{academics.graduation.cgpa}</span>
        </div>
      </div>
    </section>
  );
}

export default AcademicBackground;