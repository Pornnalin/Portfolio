function Contact() {
  return (
    <div
      id="contact"
      className="flex items-center justify-center pt-20 pb-[100px]"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 px-14 py-12">
        <h1 className="text-center text-5xl  font-bold">
          <span className="">Get in Touch</span>
        </h1>
        <p className="text-center text-md font-semibold text-gray-500">
          Have a question, idea, or collaboration in mind? I d love to hear from
          you! Let s connect and bring ideas to life.
        </p>
        <a
          href="mailto:p.pornnalin.s@gmail.com"
          className="text-nowrap rounded-lg border px-5 py-3 text-lg font-bold text-white shadow-lg  transition-all duration-300 hover:-translate-y-2  "
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Contact;
