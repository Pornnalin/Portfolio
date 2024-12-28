import { FaReact } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { BsUnity } from "react-icons/bs";
function Tech() {
  return (
    <div
      id="tech"
      className="flex flex-col justify-center items-center py-[20px] mt-[120px] gap-9 "
    >
      <h2 className="text-4xl font-bold text-nowrap py-6 md:text-5xl">
        Technologies
      </h2>
      <ul className="grid justify-between gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 sm:gap-12 xl:gap-28 gap-y-10 ">
        <li className="text-7xl ">
          <FaJs />
        </li>
        <li className="text-7xl ">
          <FaReact />
        </li>
        <li className="text-7xl ">
          <RiTailwindCssFill />
        </li>
        <li className="text-7xl">
          <SiVite />
        </li>
        <li className="text-7xl">
          <FaGithubSquare />
        </li>
        <li className="text-7xl">
          <BsUnity />
        </li>
      </ul>
    </div>
  );
}

export default Tech;
