/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};
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
    <ScrollReveal>
      <div
        key={index}
        className="flex flex-col items-center justify-center gap-8 xl:flex-row md:gap-20 py-10"
      >
        <img
          src={imagePath}
          alt=""
          loading="lazy"
          className="w-full rounded-2xl transition-all duration-300 hover:scale-105 md:w-[420px]  object-cover  shadow-[0px_8px_10px_-4px_#4800ff]"
        />

        <div className="flex flex-col gap-5">
          <p className="md:text-xl text-lg text-start font-bold ">{name}</p>
          <p className="text-sm md:text-md max-w-[600px]">{description}</p>
          <div className="flex flex-row items-center gap-4">
            {link && (
              <a
                href={link}
                target="_blank"
                className="text-gray-500 hover:text-white transition-all duration-300 ease-in-out self-center text-xl md:text-2xl"
              >
                <FaGithub />
              </a>
            )}
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
    </ScrollReveal>
  );
}

export default ProjectCard;
