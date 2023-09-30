import React from "react";
import { setLogo } from "./toolbtn";

const skills = [
  "react",
  "typescript",
  "javascript",
  "tailwind",
  "css",
  "node",
  "redux",
  "mongodb",
  "html",
  "sass",
  "next",
];

export default function Skills() {
  return (
    <div className="mx-auto py-8">
      <h1 className="text-center text-4xl font-extrabold capitalize">
        Skills & Experience
      </h1>
      <div className="flex flex-col xl:flex-row justify-center w-[70%] mx-auto gap-10 mt-12">
        <div className="flex gap-7 flex-wrap flex-1">
          {skills.map((el, i) => (
            <div
              key={i}
              className="flex flex-col items-center capitalize gap-2"
            >
              <div
                className={`${el} no_border w-[5.5rem] aspect-square p-5 rounded-full`}
              >
                {setLogo(el)}
              </div>
              <p>{el}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <div className="experience_grid relative group">
            <h1 className="font-bold">2021</h1>
            <h1 className="font-bold">Software Engineering Diploma</h1>
            <p className="col-start-2 col-end-3 mt-2">AltSchool Africa</p>
            <p className="group-hover:opacity-100 transition-opacity duration-750 opacity-0 absolute bottom-1 font-semibold right-1 bg-transparent_gray backdrop-blur-md rounded-md shadow-xl z-10 p-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
              rerum adipisci! Repellendus sapiente nesciunt minima quae quisquam
              inventore.
            </p>
          </div>

          <div className="experience_grid relative group">
            <h1 className="font-bold">2021</h1>
            <h1 className="font-bold">Software Engineering Diploma</h1>
            <p className="col-start-2 col-end-3 mt-2">AltSchool Africa</p>
            <p className="group-hover:opacity-100 transition-opacity duration-750 opacity-0 absolute bottom-1 font-semibold right-1 bg-transparent_gray backdrop-blur-md rounded-md shadow-xl z-10 p-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
              rerum adipisci!.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
