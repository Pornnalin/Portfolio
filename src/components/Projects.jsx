import { useState } from "react";
import json from "../data/projects";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
function Projects() {
  const [select, setSelect] = useState(false);

  const handleClick = (name, e) => {
    e.preventDefault();
    if (name === "web") {
      setSelect(false);
    } else {
      setSelect(true);
    }
  };
  return (
    <div
      id="projects"
      className="flex flex-col justify-center py-[20px] mt-[120px] "
    >
      <h2 className="text-5xl font-bold text-center py-2 pb-4">Projects</h2>
      <div className="flex justify-center gap-5 pt-10 items-center capitalize">
        <a
          href="#"
          className={`uppercase text-[12px] px-5 py-2 rounded-full transition-all duration-100 border-2 ${
            !select
              ? "border text-[14px] font-bold"
              : "border-transparent  text-gray-400"
          }`}
          onClick={(e) => handleClick("web", e)}
        >
          web
        </a>
        <a
          href="#"
          className={`uppercase text-[12px] px-5 py-2 rounded-full transition-all duration-300 border-2 ${
            select
              ? "border text-[14px] font-bold"
              : "border-transparent text-gray-400"
          }`}
          onClick={(e) => handleClick("game", e)}
        >
          game
        </a>
      </div>

      <div className="py-2 px-5 lg:px-28 ">
        <div key={select ? "game" : "web"} className="animate-fadein">
          {!select ? (
            <div>
              {json.web.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center gap-5 py-10 "
                >
                  <p className="md:text-2xl text-lg text-center lg:text-2xl font-bold ">
                    {item.name}
                  </p>
                  <div className="md:mx-10 mx-3 flex justify-center">
                    <img
                      src={item.imagePath}
                      alt=""
                      loading="lazy"
                      className="my-3  rounded-md md:w-[700px] shadow-[1px_8px_14px_0px_rgba(227,227,227,0.3)]"
                    />
                  </div>
                  <p className="text-sm sm:text-lg py-4">{item.description}</p>
                  <div className="flex flex-row items-start gap-4">
                    <a
                      href={item.link}
                      target="_blank"
                      className="text-gray-500 hover:text-white transition-all duration-300 ease-in-out self-center text-xl md:text-3xl"
                    >
                      <FaGithub />
                    </a>
                    {item.linkOn && (
                      <a
                        href={item.linkOn}
                        target="_blank"
                        className="text-gray-500 hover:text-white transition-all duration-300 ease-in-out self-center text-xl  md:text-2xl"
                      >
                        <HiOutlineExternalLink />
                      </a>
                    )}
                  </div>
                  <div className="flex flex-row gap-4 flex-wrap">
                    {item.tools.map((tool, toolIndex) => (
                      <p
                        key={toolIndex}
                        className="text-[11px] md:text-[15px] text-gray-500 text-nowrap"
                      >
                        #{tool}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {json.games.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center gap-5 py-10 "
                >
                  <p className="md:text-2xl text-lg  text-center capitalize font-bold">
                    {item.name}
                  </p>
                  <div className="md:mx-10 mx-3 flex justify-center">
                    <img
                      src={item.imagePath}
                      alt=""
                      loading="lazy"
                      className="my-3 self-center rounded-md md:w-[700px] shadow-[1px_8px_14px_0px_rgba(227,227,227,0.3)]"
                    />
                  </div>
                  <p className="text-sm sm:text-lg py-4">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      className="text-gray-500 hover:text-white transition-all duration-300 ease-in-out self-start text-xl  md:text-2xl"
                    >
                      <HiOutlineExternalLink />
                    </a>
                  )}
                  <div className="flex flex-row gap-4">
                    {item.tools.map((tool, toolIndex) => (
                      <p
                        key={toolIndex}
                        className="text-[12px] md:text-[15px] text-gray-500"
                      >
                        #{tool}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
