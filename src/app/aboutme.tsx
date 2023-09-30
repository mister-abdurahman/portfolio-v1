import React from "react";

export default function AboutMe() {
  return (
    <div className="mx-auto py-8 bg-secondary_transparent">
      <h1 className="text-center text-4xl font-extrabold">
        Meet <span className="text-secondary">Me</span>
      </h1>
      <div className="flex gap-8 mx-auto pt-8 justify-center w-[75%]">
        <div className="flex-1 bg-white w-40 aspect-video rounded-md shadow-lg">
          video
        </div>
        <div className="flex-1 flex gap-6 flex-wrap">
          <div className="bg-white">
            <span className="text-secondary"> 3+ </span> Years of Experience
          </div>
          <div>
            <span className="text-secondary">20+</span> Projects Completed
          </div>
          <div>
            <span className="text-secondary">20+</span> Coding Challenges solved
          </div>
          <div>
            <span className="text-secondary">2+</span> Certifications Earned
          </div>
          <button>Download Resume</button>
        </div>
      </div>
    </div>
  );
}
