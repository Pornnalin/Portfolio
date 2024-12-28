import { FaReact } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
function Tech() {
  return (
    <div
      id="tech"
      className="flex flex-col justify-center items-center py-[20px] mt-[120px] gap-9 "
    >
      <h2 className="text-4xl font-bold text-nowrap py-6 md:text-5xl">
        Technologies
      </h2>
      <ul className="flex justify-between gap-4 flex-col sm:flex-row sm:gap-12 xl:gap-28 gap-y-10 ">
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
      </ul>
    </div>
  );
}

export default Tech;
