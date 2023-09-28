// "use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { ImIcoMoon } from "react-icons/im";
import { motion } from "framer-motion";
import Image from "next/image";
import navBgImg from "../../public/bgWhite.png";

export function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-transparent_gray backdrop-blur-md border-nav_border z-10 fixed top-0 flex justify-between items-center px-16 py-4 min-w-full">
      <h1 className=" font-DMSans uppercase font-extrabold text-sm">
        Abdu<span className="text-secondary">rahman</span>
      </h1>
      <div className="md:hidden order-3">
        {!toggle ? (
          <div className="bg-secondary p-2 rounded-full md:hidden">
            <GiHamburgerMenu
              onClick={() => setToggle(true)}
              className="fill-white"
            />
          </div>
        ) : (
          <motion.div
            whileInView={{ x: [300, 0] }}
            className="fixed top-0 bottom-0 right-0 z-20 p-4 w-[70%] h-screen bg-white bg-navbar_bg_image"
            // style={{ backgroundImage: `url('${navBgImg.src}')` }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <div className="absolute w-full bottom-0">
              <Image alt="" src={navBgImg} />
            </div>
            <AiOutlineClose
              onClick={() => setToggle(false)}
              className=" fill-purple-900 w-10 h-10 absolute right-8"
            />
            <ul className="md:hidden flex flex-col gap-8 ml-8 mt-6 text-gray-600">
              {[
                "Contact Me",
                "Portfolio",
                "About Me",
                "Skills & Experience",
              ].map((el) => (
                <li
                  key={el}
                  className="text-sm uppercase hover:text-secondary transition"
                >
                  <a href={`#${el}`} onClick={() => setToggle(false)}>
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      <ul className="hidden md:flex gap-6">
        {["Contact Me", "Portfolio", "About Me", "Skills & Experience"].map(
          (el) => (
            <li
              key={el}
              className="text-sm uppercase hover:text-secondary transition"
            >
              <a href="#">{el}</a>
            </li>
          )
        )}
      </ul>
      <div>
        <ImIcoMoon className="w-8 h-8" />
      </div>
    </nav>
  );
}
