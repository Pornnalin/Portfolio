import { useState } from "react";
import { SlMenu } from "react-icons/sl";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/50 px-8 py-6 sm:px-[140px]  text-white backdrop-blur-md">
      <h1 className="text-xl sm:text-2xl uppercase font-bold">portfolio</h1>
      {/* desktop */}
      <div className="hidden sm:flex items-center font-semibold ">
        <ul className="flex sm:gap-10">
          <li className="hover:underline uppercase text-[14px]">
            <a href="#about">About</a>
          </li>
          <li className="hover:underline uppercase text-[14px]">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:underline uppercase text-[14px]">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* mobile */}
      <div className="sm:hidden flex font-semibold">
        <span onClick={handleMenu} className="cursor-pointer">
          <SlMenu />
        </span>
        <ul
          className={`transition-all duration-500 absolute top-[75px] left-0 border-b border-b-gray-700 bg-black/90 w-full flex flex-col justify-evenly  h-[150px] px-7 ${
            isOpen
              ? " translate-x-0 opacity-100"
              : " translate-x-full opacity-0 "
          } `}
        >
          <li className="hover:underline">
            <a href="#about" onClick={handleMenu}>
              About
            </a>
          </li>
          <li className="hover:underline">
            <a href="#projects" onClick={handleMenu}>
              Projects
            </a>
          </li>
          <li className="hover:underline">
            <a href="#contact" onClick={handleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
