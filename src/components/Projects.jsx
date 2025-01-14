import { useState } from "react";
import json from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { variants } from "./../data/variants";

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
      <motion.h2
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center py-2 pb-4"
      >
        Projects
      </motion.h2>
      <motion.div
        className="flex justify-center gap-5 pt-10 items-center capitalize"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>

      <div className="py-2 px-5 lg:px-36">
        <div
          key={select ? "game" : "web"}
          className="flex flex-col items-center justify-center"
        >
          {!select ? (
            <>
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
            </>
          ) : (
            <>
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
              <a
                href="https://www.canva.com/design/DAGYPWC41v4/FcKH6KKRZ2twVHCTrm1Bbw/edit?utm_content=DAGYPWC41v4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                className="my-10 text-nowrap rounded-lg border px-5 py-3 text-lg font-bold text-white shadow-lg  transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_4px_6px_0px_rgba(147,_51,_234,_0.5)] "
              >
                View More
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
