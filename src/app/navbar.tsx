"use client"

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

export function NavBar() {
    const [toggle, setToggle] = useState(false);

    console.log(toggle)
    return (
        <nav className="bg-transparent_gray backdrop-blur-md z-10 fixed flex justify-between items-center px-16 py-4 min-w-full">
            <h1 className=" font-DMSans uppercase font-extrabold text-sm">
                Abdu<span className="text-secondary">rahman</span>
            </h1>
            <div className="">
                <div className="bg-secondary p-2 rounded-full md:hidden">
                    <GiHamburgerMenu onClick={() => setToggle(true)} className="fill-white" />
                </div>
                {toggle && <motion.div whileInView={{ x: [300, 0] }} className="bg-rose-200 fixed top-0 bottom-0 right-0 z-20 p-4 w-[75%] h-screen"
                    transition={{ duration: 0.85, ease: "easeOut" }}
                >
                    <AiOutlineClose onClick={() => setToggle(false)} className="fill-white" />
                    <ul className="md:hidden flex flex-col gap-4">
                        {["Contact Me", "Portfolio", "About Me", "Skills & Experience"].map(el => <li className="text-sm"><a href={`#${el}`} onClick={() => setToggle(false)}>{el}</a></li>)}
                    </ul>
                </motion.div>}
            </div>
            <ul className="hidden md:flex gap-6">
                {["Contact Me", "Portfolio", "About Me", "Skills & Experience"].map(el => <li className="text-sm"><a href="#">{el}</a></li>)}
            </ul>
        </nav >
    );
}