import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
    </main>
  );
}

function NavBar() {
  return (
    <nav className="bg-transparent_gray backdrop-blur-md z-10 fixed flex justify-between items-center px-10 py-4 min-w-full">
      <h1 className=" font-DMSans uppercase font-extrabold text-sm">
        Abdu<span className="text-secondary">rahman</span>
      </h1>
      <div className="bg-secondary p-2 rounded-full">
        <GiHamburgerMenu className="fill-white" />
      </div>
    </nav>
  );
}

// add framer motion
// build each section mobile first then desktop consecutively
