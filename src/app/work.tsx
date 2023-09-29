import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import front_end from "../../public/about01.png";
import web_design from "../../public/about02.png";
import react from "../../public/about03.png";
import node from "../../public/about04.png";

const cards = [
  {
    image: front_end,
    title: "Frontend Developer",
    text: "I develope the frontend of web apps",
  },
  {
    image: web_design,
    title: "Web Developer",
    text: "I develope web apps",
  },
  {
    image: react,
    title: "React Developer",
    text: "I develope react apps",
  },
  {
    image: node,
    title: "Node Developer",
    text: "I develope node apis",
  },
];

function Work() {
  return (
    <div className="mx-auto w-[80%] text-center bg-white py-20">
      <h1 className="capitalize font-extrabold text-4xl text-center">
        I know that a<span className="text-secondary"> good developer</span>{" "}
        <br /> means <span className="text-secondary"> good business.</span>{" "}
      </h1>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 5 }}
        className="flex mt-16 justify-around flex-wrap"
      >
        {cards.map((el, i) => (
          <div
            key={i}
            className="card flex flex-col gap-2 items-center hover:scale-110 transition duration-500 ease-in-out"
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

export default Work;
