import React from "react";
import { setLogo } from "./toolbtn";
import AppWrap from "./AppWrap";

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

function Skills() {
  return (
    <div
      className="py-8 dark:bg-thick_black dark:text-white"
      id="Skills&Experience"
    >
      <h1 className="text-center text-4xl font-extrabold capitalize">
        Skills & Experience
      </h1>
      <div className="flex flex-col xl:flex-row justify-center w-[70%] mx-auto gap-10 mt-12">
        <div className="flex xl:justify-normal justify-center gap-7 flex-wrap flex-1">
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
        <div className="flex-1 flex flex-col gap-10 mx-auto">
          <div className="experience_grid relative group">
            <h1 className="font-bold">2023</h1>
            <h1 className="font-bold">Frontend Developer</h1>
            <p className="col-start-2 col-end-3 mt-2">Lagetronix</p>
            <p className="group-hover:opacity-100 transition-opacity duration-750 opacity-0 absolute bottom-1 font-semibold right-1 bg-transparent_gray backdrop-blur-md rounded-md shadow-xl z-10 p-2">
              I craft user interfaces, ensuring responsive, visually appealing
              websites. I am proficient at using HTML, CSS, JavaScript,
              Typescript, Tailwind and frameworks like React, optimizing user
              experiences with seamless navigation, speed, and accessibility.
            </p>
          </div>

          <div className="experience_grid relative group">
            <h1 className="font-bold">2023</h1>
            <h1 className="font-bold">Frontend Developer Intern</h1>
            <p className="col-start-2 col-end-3 mt-2">Lagetronix</p>
            <p className="group-hover:opacity-100 transition-opacity duration-750 opacity-0 absolute bottom-1 font-semibold right-1 bg-transparent_gray backdrop-blur-md rounded-md shadow-xl z-10 p-2">
              I manage and develop the web applications of the company and their
              clients by ensuring scalability, optimization an dall the modern
              features following best practises. The technologies i mostly use
              include React, Typescript, Tailwind, AngularJs amongst others.
            </p>
          </div>

          <div className="experience_grid relative group">
            <h1 className="font-bold">2022</h1>
            <h1 className="font-bold">Software Engineering Diploma</h1>
            <p className="col-start-2 col-end-3 mt-2">AltSchool Africa</p>
            <p className="group-hover:opacity-100 transition-opacity duration-750 opacity-0 absolute bottom-1 font-semibold right-1 bg-transparent_gray backdrop-blur-md rounded-md shadow-xl z-10 p-2">
              I earned my first official Software Engineering diploma after
              passing series of examinations and challenges. I covered the
              basics of software engineering, web development, best coding
              practises, collaborations and lots more. !
            </p>
          </div>

          <div className="experience_grid relative group">
            <h1 className="font-bold">2021</h1>
            <h1 className="font-bold">Website Mastery</h1>
            <p className="col-start-2 col-end-3 mt-2">HTML, CSS & JAVASCRIPT</p>
            <p className="group-hover:opacity-100 transition-opacity duration-750 opacity-0 absolute bottom-1 font-semibold right-1 bg-transparent_gray backdrop-blur-md rounded-md shadow-xl z-10 p-2">
              I completed an udemy certified course on website developement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppWrap(Skills, "Skills&Experience");
