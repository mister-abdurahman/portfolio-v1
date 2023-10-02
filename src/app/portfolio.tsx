import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { AiFillEye } from "react-icons/ai";
import { Button } from "@mui/material";
import imageholder1 from "../../public/about01.png";
import imageholder2 from "../../public/about02.png";
import imageholder3 from "../../public/about03.png";
import ProjectDialog from "./ProjectDialog";

// ["All", "React App", "Web App", "Node App", "React+Node"]
import { projects } from "../../portfolio";

export interface cardType {
  image: StaticImageData;
  category: string;
  title: string;
  readme: string;
  tools: string[];
  github_link: string;
  live_demo: string;
}

const category = ["All", "React App", "Web App", "Node App", "React+Node"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [openModal, setOpenModal] = useState(false);
  const [selectedProj, setSelectedProj] = useState<null | cardType>(null);
  const [projectsOnDisplay, setProjectsOnDisplay] = useState(projects);

  function handleOpenModal(selectedProj: cardType) {
    setOpenModal(true);
    setSelectedProj(selectedProj);
  }

  useEffect(
    function () {
      setProjectsOnDisplay((prev): any => {
        if (active === "All") return projects;
        else return projects.filter((el) => el.category === active);
      });
    },
    [active]
  );

  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1, delayChildren: 5 }}
      id="Portfolio"
      className="bg-primary dark:bg-gray-700 dark:text-white py-20"
    >
      <h1 className="text-4xl font-extrabold text-center capitalize">
        My creative{" "}
        <span className="text-secondary dark:text-purple-400">Portfolio</span>{" "}
        Section
      </h1>
      <div className="flex gap-4 justify-center my-9">
        {category.map((el, i) => (
          <button
            key={i}
            onClick={() => setActive(el)}
            className={`${
              active === el
                ? "bg-secondary dark:bg-purple-300 text-white dark:text-black"
                : "bg-white dark:bg-thick_black text-black dark:text-white"
            } rounded-md p-2`}
          >
            {el}
          </button>
        ))}
      </div>
      <div className="flex gap-8 justify-center flex-wrap mx-auto">
        {projectsOnDisplay.map((el, i) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, delayChildren: 5 }}
            className="flex flex-col items-center group bg-white dark:bg-black rounded-md hover:shadow-2xl transition-shadow duration-500 max-w-[16rem]"
            key={i}
          >
            <div className="w-60 h-60">
              <Image
                src={el.image}
                alt=""
                width={250}
                height={280}
                className="p-3 rounded-md object-cover object-center w-full h-full group-hover:brightness-75 transition-all duration-500"
              />
            </div>
            <div className="flex opacity-0 gap-6 group-hover:opacity-100 z-10 transition-opacity duration-500">
              <div className="bg-transparent_black rounded-full -mt-32 w-14 aspect-square h-fit">
                <a href={el.github_link} target="_blank">
                  <FaGithub className="w-full h-full p-3 fill-white" />
                </a>
              </div>
              <div className="bg-transparent_black flex justify-center rounded-full -mt-32 w-14 aspect-square h-fit">
                <Button className="p-0" onClick={() => handleOpenModal(el)}>
                  <AiFillEye className="w-full h-full p-3 fill-white" />
                </Button>
              </div>
            </div>
            <p className=" -mt-8 bg-white dark:bg-gray-700 rounded-md p-2 z-10">
              {el.category}
            </p>
            <h4 className="my-3 font-semibold capitalize">{el.title}</h4>
            <p className="mb-4 px-6">{el.readme}</p>
          </motion.div>
        ))}
        <ProjectDialog
          openModal={openModal}
          setOpenModal={setOpenModal}
          selectedProj={selectedProj}
        />
      </div>
    </motion.div>
  );
}
