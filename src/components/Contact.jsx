import { motion } from "framer-motion";
import { variants } from "../data/variants";

function Contact() {
  return (
    <div
      id="contact"
      className="flex items-center justify-center pt-20 pb-[100px] animate-fadein"
    >
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-3 space-y-6 px-14 py-12"
      >
        <h1 className="text-center text-5xl  font-bold">
          <span className="">Get in Touch</span>
        </h1>
        <p className="text-center text-md font-semibold text-gray-500">
          Have a question, idea, or collaboration in mind? I d love to hear from
          you! Let s connect and bring ideas to life.
        </p>
        <a
          href="mailto:p.pornnalin.s@gmail.com"
          className="text-nowrap rounded-lg border px-5 py-3 text-lg font-bold text-white shadow-lg  transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_4px_6px_0px_rgba(147,_51,_234,_0.5)] "
        >
          Contact Me
        </a>
      </motion.div>
    </div>
  );
}

export default Contact;
