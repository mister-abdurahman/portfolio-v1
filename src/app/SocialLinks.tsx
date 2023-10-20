import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

function SocialLinks() {
  return (
    <div className="hidden md:flex flex-col gap-2 absolute bottom-4 left-4 z-10">
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
    </div>
  );
}

export default SocialLinks;
