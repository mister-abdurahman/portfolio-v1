"use client";

import Image from "next/image";
import { useState } from "react";
import { NavBar } from "./navbar";
import Hero from "./hero";
import Work from "./work";
import Portfolio from "./portfolio";
import Skills from "./skills";
import AboutMe from "./aboutme";
import Contact from "./contact";
import NavDot_SocialLinkHOC from "./NavDot_SocialLinkHOC";
import NavDots from "./NavDots";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState(0);

  return (
    <main className={`${darkMode ? "dark" : ""} min-h-screen`}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      {/* <NavDot_SocialLinkHOC innerComponent={<Hero />} navdots={<NavDots setActivePage={setActivePage} dot={0} />} /> */}
      {/* </NavDot_SocialLinkHOC> */}
      <Work />
      <Portfolio />
      {/* <NavDot_SocialLinkHOC innerComponent={<Portfolio />} navdots={<NavDots setActivePage={setActivePage} dot={1} />} /> */}
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
