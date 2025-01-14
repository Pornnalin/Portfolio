import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
function App() {
  return (
    <>
      <div className="overflow-x-hidden fixed inset-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 z-[-2]  bg-[radial-gradient(#72717133_1px,#080808_1px)] bg-[size:20px_20px] ">
        <Navbar />
        <div className="max-w-full flex flex-col justify-center overflow-x-hidden max-mx-auto my-10 relative">
          <div className="mx-[30px] flex flex-col md:mx-[62px] xl:mx-[150px] gap-20 sm:gap-[100px]">
            <Hero />
            <Tech />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
