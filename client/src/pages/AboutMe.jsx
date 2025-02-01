import React from "react";

function AboutMe({ aboutme }) {
  return (
    <section className="mb-16 mt-24">
      <h2 className="text-sm font-medium text-neutral-400 mb-6">ABOUT</h2>
      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-neutral-400">Name</span>
          <span className="text-neutral-200">{aboutme.name}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-neutral-400">College</span>
          <span className="text-neutral-200">{aboutme.college}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-neutral-400">Passing Year</span>
          <span className="text-neutral-200">{aboutme.passingYear}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-neutral-400">Aggregate</span>
          <span className="text-neutral-200">{aboutme.aggregate}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-neutral-400">Description</span>
          <span className="text-neutral-200">{aboutme.description}</span>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;