import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import circle from "../../public/circle.svg";
import smallCircle from "../../public/smallCircle.svg";
import typescript from "../../public/typescript.png";
import react from "../../public/react.png";
import tailwind from "../../public/tailwind.svg";
import profile from "../../public/profile1-removebg.png";
import NavDots from "./NavDots";
import SocialLinks from "./SocialLinks";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  const [activePage, setActivePage] = useState(0);
  return (
    <div className="bg-primary dark:bg-gray-700 md:h-screen relative" id="Hero">
      <div className="pt-6 md:absolute md:mt-20">
        <div className="bg-white dark:bg-black dark:text-white flex items-center gap-4 rounded-xl w-fit px-5 py-3 md:px-9 md:py-5 ml-20 md:ml-30 mt-16 md:mt-auto shadow-lg">
          <h1 className="text-3xl">👋</h1>
          <div>
            <p className="text-sm">Hello, I am</p>
            <h1 className="text-2xl font-extrabold">Abdurahman</h1>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-black dark:text-white md:absolute md:top-48 flex flex-col text-right rounded-xl w-fit px-5 py-3 md:px-6 md:py-3 mt-4 ml-20 md:ml-[9.7rem] shadow-lg">
        <p>Front-End Developer</p>
        <p>Web Developer</p>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="mx-auto text-center max-w-[28rem] max-h-[28rem] pt-8 relative md:hidden"
      >
        <Image src={circle} alt="" className="w-full" />
        <Image
          src={profile}
          alt=""
          className="absolute top-0 w-[90%] left-1/2 -translate-x-1/2 z-10"
        />
        <Image
          src={smallCircle}
          alt=""
          className="absolute w-6 h-6 top-24 right-0"
        />
      </motion.div>
      <div className="hidden md:block absolute right-0 w-56 h-56 opacity-40">
        <Image alt="" src={circle} />
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="hidden md:block absolute top-[27.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[23rem] h-[23rem] opacity-40"
      >
        <Image alt="" src={circle} />
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="hidden md:block absolute top-[20.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26.5rem] h-[26.5rem]"
      >
        <Image src={profile} alt="" className="w-full z-10 absolute" />
      </motion.div>

      <div className="hidden md:block absolute top-[35rem] left-16 w-16 h-16 opacity-60">
        <Image alt="" src={circle} />
      </div>
      <div className="hidden md:block absolute top-[41rem] left-52 w-3 h-3">
        <Image alt="" src={smallCircle} />
      </div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="hidden md:flex justify-center items-center md:absolute md:top-[12rem] md:m-auto md:left-[61%] bg-white shadow-xl rounded-full w-[5.9rem] aspect-square"
      >
        <Image src={typescript} alt="" className="w-full p-5" />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="hidden md:flex justify-center items-center md:absolute md:top-[22rem] md:m-auto md:left-[68%] bg-white shadow-xl rounded-full w-[8.2rem] aspect-square"
      >
        <Image src={react} alt="" className="w-full p-4" />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="hidden md:flex justify-center items-center absolute md:top-[34rem] md:left-[64%] md:m-auto bg-white shadow-xl rounded-full w-[5.3rem] aspect-square"
      >
        <Image src={tailwind} alt="" className="w-full p-4" />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="md:hidden mx-auto w-fit mt-8 flex gap-0"
      >
        <div className="flex justify-center h-fit mt-12 items-center bg-white shadow-xl rounded-full w-[5.9rem] aspect-square">
          <Image src={typescript} alt="" className="w-full p-5" />
        </div>
        <div className="flex justify-center h-fit mt-16 items-center ml-8 bg-white shadow-xl rounded-full w-[8.2rem] aspect-square">
          <Image src={react} alt="" className="w-full p-4" />
        </div>
        <div className="flex justify-center h-fit mt-12 items-center ml-8 bg-white shadow-xl rounded-full w-[5.3rem] aspect-square">
          <Image src={tailwind} alt="" className=" w-full p-4" />
        </div>
      </motion.div>

      {/* <div className="hidden md:flex flex-col gap-2 absolute bottom-4 left-4">
        <div className="bg-white dark:bg-thick_black group dark:hover:bg-secondary hover:bg-secondary transition-colors duration-500 flex justify-center items-center rounded-full w-10 aspect-square">
          <a
            href="https://www.linkedin.com/in/ramadan-aramide-855289218/"
            target="_blank"
            className="text-gray-500 dark:text-white group-hover:text-white transition-colors duration-500"
          >
            <FaLinkedin className=" w-full h-full p-2" />
          </a>{" "}
        </div>

        <div className="bg-white dark:bg-thick_black group dark:hover:bg-secondary group hover:bg-secondary transition-colors duration-500 flex justify-center items-center rounded-full w-10 aspect-square">
          <a
            href="https://github.com/mister-abdurahman"
            target="_blank"
            className="text-gray-500 dark:text-white group-hover:text-white transition-colors duration-500"
          >
            {" "}
            <FaGithub clasName="w-full h-full p-2" />
          </a>
        </div>

        <div className="bg-white dark:bg-thick_black group dark:hover:bg-secondary group hover:bg-secondary transition-colors duration-500 flex justify-center items-center rounded-full w-10 aspect-square">
          <a
            href="https://wa.link/cy8shs"
            target="_blank"
            className="text-gray-500 dark:text-white group-hover:text-white transition-colors duration-500"
          >
            {" "}
            <FaWhatsapp clasName="w-full h-full p-2" />
          </a>
        </div>
      </div> */}
      <SocialLinks />

      {/* <div className="hidden md:flex flex-col gap-3 fixed top-1/2 -translate-x-1/2 right-0">
        {["Hero", "Portfolio", "AboutMe", "Skills&Experience", "ContactMe"].map(
          (el, i) => (
            <Link
              // href={`#${el}`}
              to={el}
              key={i}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="hover:cursor-pointer w-3 h-3 relative"
            >
              <span
                onClick={() => setActivePage(i)}
                className={`${
                  activePage === i
                    ? "bg-secondary dark:bg-purple-300"
                    : "bg-gray-300"
                } w-full h-full absolute aspect-square rounded-full`}
              ></span>
            </Link>
          )
        )}
      </div> */}
      <NavDots setActivePage={setActivePage} dot={0} />
    </div>
  );
}

// 02:02:47 HOC video part