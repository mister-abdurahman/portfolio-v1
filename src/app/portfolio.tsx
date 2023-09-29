import React, { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { AiFillEye } from "react-icons/ai";
import imageholder1 from "../../public/about01.png";
import imageholder2 from "../../public/about02.png";
import imageholder3 from "../../public/about03.png";

const card = [
  {
    image: imageholder1,
    category: "React App",
    title: "project_title",
    readme: "lorem ipsum...",
  },
  {
    image: imageholder2,
    category: "Node App",
    title: "project_title",
    readme: "lorem ipsum...",
  },
  {
    image: imageholder3,
    category: "Web App",
    title: "project_title",
    readme: "lorem ipsum...",
  },
  {
    image: imageholder1,
    category: "React App",
    title: "project_title",
    readme: "lorem ipsum...",
  },
  {
    image: imageholder3,
    category: "Web App",
    title: "project_title",
    readme: "lorem ipsum...",
  },
];

const category = ["All", "React App", "Web App", "Node App", "React+Node"];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  return (
    <div className="bg-primary py-20">
      <h1 className="text-4xl font-extrabold text-center capitalize">
        My creative <span className="text-secondary">portfolio</span> section
      </h1>
      <div className="flex gap-4 justify-center my-9">
        {category.map((el, i) => (
          <button
            key={i}
            onClick={() => setActive(el)}
            className={`${
              active === el ? "bg-secondary text-white" : "bg-white text-black"
            } rounded-md p-2`}
          >
            {el}
          </button>
        ))}
      </div>
      <div className="flex gap-8 justify-center flex-wrap mx-24">
        {card.map((el, i) => (
          <div
            className="flex flex-col items-center group bg-white rounded-md hover:shadow-2xl transition-shadow duration-500"
            key={i}
          >
            <Image
              src={el.image}
              alt=""
              width={350}
              height={380}
              className="p-3 rounded-md group-hover:brightness-75 transition-all duration-500"
            />
            <div className="flex opacity-0 gap-6 group-hover:opacity-100 z-10 transition-opacity duration-500">
              <div className="bg-transparent_black rounded-full -mt-40 w-14 aspect-square h-fit">
                <a href="">
                  <FaGithub className="w-full h-full p-3 fill-white" />
                </a>
              </div>
              <div className="bg-transparent_black rounded-full -mt-40 w-14 aspect-square h-fit">
                <a href="">
                  <AiFillEye className="w-full h-full p-3 fill-white" />
                </a>
              </div>
            </div>
            <p className=" -mt-8 bg-white rounded-md p-2 z-10">{el.category}</p>
            <h4 className="my-3 font-semibold capitalize">{el.title}</h4>
            <p className="mb-4">{el.readme}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
