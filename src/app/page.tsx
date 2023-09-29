"use client";

import Image from "next/image";
import { NavBar } from "./navbar";
import Hero from "./hero";
import Work from "./work";
import Portfolio from "./portfolio";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <Work />
      <Portfolio />
    </main>
  );
}

// function NavBar() {
//   return (
//     <nav className="bg-transparent_gray backdrop-blur-md z-10 fixed flex justify-between items-center px-16 py-4 min-w-full">
//       <h1 className=" font-DMSans uppercase font-extrabold text-sm">
//         Abdu<span className="text-secondary">rahman</span>
//       </h1>
//       <div className="">
//         <div className="bg-secondary p-2 rounded-full md:hidden">
//           <GiHamburgerMenu className="fill-white" />
//         </div>
//         <ul className="hidden md:flex gap-6">
//           {["Contact Me", "Portfolio", "About Me", "Skills & Experience"].map(el => <li className="text-sm"><a href="#">{el}</a></li>)}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// add framer motion
// build each section mobile first then desktop consecutively
