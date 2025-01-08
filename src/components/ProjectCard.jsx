/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectCard({
  index,
  imagePath,
  name,
  link,
  tools,
  description,
  linkOn,
}) {
  return (
    <div
      key={index}
      className="flex flex-col items-center justify-center gap-8 xl:flex-row md:gap-10 py-10"
    >
      <img
        src={imagePath}
        alt=""
        loading="lazy"
        className="w-full rounded-2xl transition-all duration-300 hover:scale-105 md:w-[420px] shadow-[1px_8px_14px_0px_rgba(227,227,227,0.3)]"
      />

      <div className="flex flex-col gap-5 ">
        <p className="md:text-xl text-lg text-start font-bold ">{name}</p>
        <p className="text-sm md:text-md">{description}</p>
        <div className="flex flex-row items-center gap-4">
          <a
            href={link}
            target="_blank"
            className="text-gray-500 hover:text-white transition-all duration-300 ease-in-out self-center text-xl md:text-2xl"
          >
            <FaGithub />
          </a>
          {linkOn && (
            <a
              href={linkOn}
              target="_blank"
              className="text-gray-500 hover:text-white transition-all duration-300 ease-in-out self-center text-xl  md:text-2xl"
            >
              <HiOutlineExternalLink />
            </a>
          )}
        </div>
        <div className="flex flex-row gap-4 flex-wrap">
          {tools.map((tool, toolIndex) => (
            <p
              key={toolIndex}
              className="text-[11px] md:text-[13px]  text-gray-500 text-nowrap"
            >
              #{tool}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
