import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import front_end from "../../public/about01.png";
import web_design from "../../public/about02.png";
import react from "../../public/about03.png";
import node from "../../public/about04.png";
import AppWrap from "./AppWrap";

const cards = [
  {
    image: front_end,
    title: "Frontend Developer",
    text: "I create engaging websites and applications using HTML, CSS, React, Tailwind and JavaScript, turning design concepts into seamless user experiences.",
  },
  {
    image: web_design,
    title: "Web Developer",
    text: "As a web developer, I build dynamic, scalable websites and web applications, employing a range of web technologies to deliver exceptional online solutions.",
  },
  {
    image: react,
    title: "React Developer",
    text: "As a React developer, I specialize in building dynamic, high-performance web applications, harnessing the power of React to craft engaging user interfaces.",
  },
  {
    image: node,
    title: "Node Developer",
    text: "As a Node.js developer, I leverage the server-side power of Node.js to create efficient, scalable, and data-driven web applications and APIs.",
  },
];

function Work() {
  return (
    <div className="text-center bg-white dark:bg-thick_black dark:text-white py-20">
      <h1 className="capitalize font-extrabold text-4xl text-center">
        I know that a
        <span className="text-secondary dark:text-purple-300">
          {" "}
          good developer
        </span>{" "}
        <br /> means{" "}
        <span className="text-secondary dark:text-purple-300">
          {" "}
          Good business.
        </span>{" "}
      </h1>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 5 }}
        className="flex mt-16 justify-around flex-wrap mx-auto w-[80%]"
      >
        {cards.map((el, i) => (
          <div
            key={i}
            className="card mb-3 flex flex-col gap-2 items-center hover:scale-110 transition duration-500 ease-in-out"
          >
            <Image
              src={el.image}
              width={200}
              height={200}
              alt=""
              className="rounded-md"
            />
            <h3 className="font-bold">{el.title}</h3>
            <p className="w-[15rem]">{el.text} </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Work, "Hero");
