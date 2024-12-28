import { FaGithub } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
function Hero() {
  return (
    <>
      <div
        id="about"
        className="flex flex-col w-full py-[20px] mt-[190px] justify-center gap-2"
      >
        <h1 className="text-center text-5xl font-bold">Hi,I am Pornnalin</h1>
        <p className="text-sm mx-4 sm:text-lg py-4 text-center lg:mx-40 text-gray-500">
          I am a developer with 3 years of experience in Unity development,
          currently learning web development to expand my skill set.
        </p>
        <div
          className="flex gap-5 justify-center
          py-4"
        >
          <a
            href="https://github.com/Pornnalin"
            target="_blank"
            className="py-2 px-2 rounded-full border border-gray-500 hover:border-white text-gray-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pornnalin-somsri-1679bb301/"
            target="_blank"
            className="py-2 px-2 rounded-full border border-gray-500 hover:border-white text-gray-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            <GrLinkedin />
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
