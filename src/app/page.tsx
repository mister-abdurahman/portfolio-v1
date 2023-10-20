"use client";

import { useState } from "react";
import { NavBar } from "./navbar";
import Hero from "./hero";
import Work from "./work";
import Portfolio from "./portfolio";
import Skills from "./skills";
import AboutMe from "./aboutme";
import Contact from "./contact";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`${darkMode ? "dark" : ""} min-h-screen`}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Work />
      <Portfolio />
      <AboutMe />
      <Skills />
      <Contact />
    </main>
  );
}

// form enabling✔
// project filtering✔
// add links✔
// dark mode✔
// skill logos color adjustment✔
// add real data for projects✔
// add prof image ✔
// add video ✔
// **right side dot navigation enabling✔

// test form submission✔
// adjust and attach correct resume link
// activate form after deploying website

// 115800
