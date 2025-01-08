import { useState } from "react";
import json from "../data/projects";
import ProjectCard from "./ProjectCard";

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
      className="flex flex-col justify-center py-[20px] mt-[120px] animate-fadein"
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

      <div className="py-2 px-5 lg:px-36">
        <div key={select ? "game" : "web"} className="animate-fadein">
          {!select ? (
            <div>
              {json.web.map((item, index) => (
                <ProjectCard
                  key={index}
                  index={index}
                  imagePath={item.imagePath}
                  name={item.name}
                  link={item.link}
                  tools={item.tools}
                  description={item.description}
                  linkOn={item.linkOn}
                />
              ))}
            </div>
          ) : (
            <div>
              {json.games.map((item, index) => (
                <ProjectCard
                  key={index}
                  index={index}
                  imagePath={item.imagePath}
                  name={item.name}
                  link={item.link}
                  tools={item.tools}
                  description={item.description}
                  linkOn={item.linkOn}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
