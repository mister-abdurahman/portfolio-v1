import React from "react";
import { BiDownload } from "react-icons/bi";
import { LiaCertificateSolid } from "react-icons/lia";
import VideoPlayer from "./videoplayer";
import AppWrap from "./AppWrap";

function AboutMe() {
  return (
    <div className="py-8 bg-secondary_transparent dark:bg-slate-800">
      <h1 className="text-center dark:text-white text-4xl font-extrabold">
        Meet <span className="text-secondary dark:text-purple-300">Me </span>{" "}
        🙋‍♂️👨‍💻
      </h1>
      <div className="flex xl:flex-row flex-col gap-8 mx-auto pt-8 justify-center w-[85%]">
        <div className="flex-1 relative xl:order-first order-last bg-white min-w-40 aspect-video rounded-md shadow-lg">
          <VideoPlayer />
        </div>
        <div className="flex-1 flex justify-center gap-6 flex-wrap max-w-[27.5rem] mx-auto">
          <div className="bg-white dark:bg-thick_black  rounded-md dark:text-white shadow-xl flex flex-col items-center h-fit py-4 w-52">
            <span className="text-secondary dark:text-purple-300 text-3xl font-extrabold">
              {" "}
              3+{" "}
            </span>{" "}
            Years of Experience
          </div>
          <div className="bg-white dark:bg-thick_black rounded-md dark:text-white shadow-xl flex flex-col items-center h-fit py-4 w-52">
            <span className="text-secondary dark:text-purple-300 text-3xl font-extrabold">
              {" "}
              20+{" "}
            </span>{" "}
            Projects Completed
          </div>
          <div className="bg-white dark:bg-thick_black rounded-md dark:text-white shadow-xl flex flex-col items-center h-fit py-4 w-52">
            <span className="text-secondary dark:text-purple-300 text-3xl font-extrabold">
              {" "}
              20+{" "}
            </span>{" "}
            Coding Challenges solved
          </div>
          <div className="bg-white dark:bg-thick_black rounded-md dark:text-white shadow-xl flex flex-col items-center h-fit py-4 w-52">
            <span className="text-secondary dark:text-purple-300 w-9 aspect-square font-extrabold">
              {" "}
              <LiaCertificateSolid className="w-full h-full" />{" "}
            </span>{" "}
            Certified Developer
          </div>

          <a
            href={`https://drive.google.com/file/d/1PRNi2yVRZifaILIESBtTiOHxjyk7YbmW/view?usp=sharing`}
            target="_blank"
            className="flex active:translate-y-2 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 px-2 py-5 sm:py-2 xl:p-0 xl:text-base text-sm items-center gap-4 justify-center bg-secondary dark:bg-purple-300 dark:text-black grow xl:max-w-[27.5rem] max-w-[13rem] rounded-md text-primary uppercase font-semibold"
          >
            Download Resume{" "}
            <span className="xl:w-7 w-5 aspect-square">
              <BiDownload className="w-full h-full" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppWrap(AboutMe, "AboutMe");
