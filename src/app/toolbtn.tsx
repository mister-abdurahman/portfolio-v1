import React from "react";
import { BiLogoReact } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoHtml5 } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

export function setLogo(logoName: string) {
  switch (logoName) {
    case "react":
      return <BiLogoReact className="w-full h-full" />;
    case "node":
      return <FaNodeJs className="w-full h-full" />;
    case "tailwind":
      return <SiTailwindcss className="w-full h-full" />;
    case "css":
      return <DiCss3 className="w-full h-full" />;
    case "html":
      return <IoLogoHtml5 className="w-full h-full" />;
    case "typescript":
      return <BiLogoTypescript className="w-full h-full" />;
    case "javascript":
      return <SiJavascript className="w-full h-full" />;
    case "redux":
      return <SiRedux className="w-full h-full" />;
    case "sass":
      return <FaSass className="w-full h-full" />;
    case "next":
      return <SiNextdotjs className="w-full h-full" />;
    case "mongodb":
      return <BiLogoMongodb className="w-full h-full" />;
    default:
      return "";
  }
}

export default function Toolbtn({ name }: { name: string }) {
  return (
    <button
      className={`${name} py-1 px-2 rounded-lg flex gap-1 font-semibold uppercase text-sm items-center`}
    >
      {setLogo(name)} {name}
    </button>
  );
}
