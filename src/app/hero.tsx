import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import circle from "../../public/circle.svg";
import smallCircle from "../../public/smallCircle.svg";
import navBgImg from "../../public/bgWhite.png";
import typescript from "../../public/typescript.png";
import react from "../../public/react.png";
import tailwind from "../../public/tailwind.svg";

export default function Hero() {
  return (
    <div className="bg-primary h-screen relative">
      <div className="pt-10 md:pt-16 md:absolute md:mt-20">
        <div className="bg-white flex items-center gap-4 rounded-xl w-fit px-5 py-3 md:px-9 md:py-5 ml-20 md:ml-36 mt-16 md:mt-auto shadow-lg">
          <h1 className="text-3xl">👋</h1>
          <div>
            <p className="text-sm">Hello, I am</p>
            <h1 className="text-2xl font-extrabold">Abdurahman</h1>
          </div>
        </div>
      </div>
      <div className="bg-white md:absolute md:top-56 flex flex-col text-right rounded-xl w-fit px-5 py-3 md:px-6 md:py-3 mt-4 ml-20 md:ml-52 shadow-lg">
        <p>Front-End Developer</p>
        <p>Web Developer</p>
      </div>
      <div className="mx-auto text-center max-w-[28rem] max-h-[28rem] pt-8 relative md:hidden">
        <Image src={circle} alt="" className="w-full" />
        <Image
          src={smallCircle}
          alt=""
          className="absolute w-6 h-6 top-24 -right-8"
        />
      </div>
      <div className="hidden md:block absolute right-0 w-56 h-56 opacity-40">
        <Image alt="" src={circle} />
      </div>
      <div className="hidden md:block absolute top-[33.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-90 h-90 opacity-40">
        <Image alt="" src={circle} />
      </div>
      <div className="hidden md:block absolute top-[35rem] left-16 w-16 h-16 opacity-60">
        <Image alt="" src={circle} />
      </div>
      <div className="hidden md:block absolute top-[41rem] left-52 w-3 h-3">
        <Image alt="" src={smallCircle} />
      </div>

      <div className="hidden md:flex justify-center items-center absolute top-[16rem] left-[68%] bg-white shadow-xl rounded-full w-[6.2rem] aspect-square">
        <Image src={typescript} alt="" className="p-2" />
      </div>
      <div className="hidden md:flex justify-center items-center absolute top-[30rem] left-[75%] bg-white shadow-xl rounded-full w-[8.2rem] aspect-square">
        <Image src={react} alt="" className="w-full p-4" />
      </div>
      <div className="hidden md:flex justify-center items-center absolute top-[44rem] left-[68%] bg-white shadow-xl rounded-full w-[5.5rem] aspect-square">
        <Image src={tailwind} alt="" className="p-2" />
      </div>
      <div className="flex flex-col gap-2 absolute bottom-4 left-4">
        <div className="bg-white flex justify-center items-center rounded-full w-10 aspect-square">
          <a href="">
            <FaLinkedin className=" w-full h-full p-2 fill-slate-500" />
          </a>{" "}
        </div>

        <div className="bg-white flex justify-center items-center rounded-full w-10 aspect-square">
          <a href="">
            {" "}
            <FaGithubAlt clasName="w-full h-full p-2 fill-slate-500" />
            {/* <FaLinkedin className="w-full h-full p-2 fill-slate-500" /> */}
          </a>
        </div>

        <div className="bg-white flex justify-center items-center rounded-full w-10 aspect-square">
          <a href="">
            {" "}
            <FaWhatsappSquare clasName="w-full h-full p-2 fill-slate-500" />
          </a>
        </div>
      </div>
    </div>
  );
}