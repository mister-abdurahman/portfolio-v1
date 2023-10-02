// "use client";

import { Dispatch, SetStateAction, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { ImIcoMoon } from "react-icons/im";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";
import navBgImg from "../../public/bgWhite.png";
import { BsSunFill } from "react-icons/bs";

export function NavBar({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}) {
  const [toggle, setToggle] = useState(false);

  function adjustNavLink(link: string) {
    return link.replaceAll(" ", "");
  }

  return (
    <nav
      className={`
        bg-transparent_gray dark:bg-transparent_black backdrop-blur-md border-nav_border z-10 fixed top-0 flex justify-between items-center px-16 py-4 min-w-full
      `}
    >
      <h1 className=" font-DMSans uppercase font-extrabold text-sm dark:text-white">
        <Link
          to={`${adjustNavLink("Hero")}`}
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          className="hover:cursor-pointer"
        >
          Abdu
          <span className="text-secondary dark:text-purple-300">rahman</span>
        </Link>
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
            className="fixed top-0 bottom-0 right-0 z-20 p-4 w-[70%] h-screen bg-white dark:bg-black bg-navbar_bg_image"
            // style={{ backgroundImage: `url('${navBgImg.src}')` }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <div className="absolute w-full bottom-0">
              <Image alt="" src={navBgImg} className="dark:bg-black" />
            </div>
            <AiOutlineClose
              onClick={() => setToggle(false)}
              className=" fill-purple-900 dark:fill-purple-300 hover:cursor-pointer w-10 h-10 absolute right-8"
            />
            <ul className="md:hidden flex flex-col gap-8 ml-8 mt-6 text-gray-600 dark:bg-black dark:text-white">
              {[
                "Contact Me",
                "Portfolio",
                "About Me",
                "Skills & Experience",
              ].map((el) => (
                <li
                  key={el}
                  className="text-sm uppercase hover:text-secondary dark:hover:text-purple-300 transition"
                >
                  <Link
                    to={`${adjustNavLink(el)}`}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="hover:cursor-pointer"
                    onClick={() => setToggle(false)}
                  >
                    {el}
                  </Link>
                  {/* <a href={`#${el}`} onClick={() => setToggle(false)}>
                    {el}
                  </a> */}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      <ul className="hidden md:flex gap-6 dark:text-white">
        {["Contact Me", "Portfolio", "About Me", "Skills & Experience"].map(
          (el) => (
            <li
              key={el}
              className="text-sm uppercase hover:text-secondary dark:hover:text-purple-300 transition"
            >
              {/* <a href={`#${adjustNavLink(el)}`}>{el}</a> */}
              <Link
                to={`${adjustNavLink(el)}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="hover:cursor-pointer"
              >
                {el}
              </Link>
            </li>
          )
        )}
      </ul>
      <div>
        <BsSunFill
          onClick={() => setDarkMode((prev) => !prev)}
          className="w-8 h-8 dark:fill-primary hover:cursor-pointer"
        />
      </div>
    </nav>
  );
}
