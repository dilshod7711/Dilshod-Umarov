import { AiOutlineDownload } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import ConnectedDots from "./ConnectedDots.jsx";
import cv from "../../assets/Umbarov Dilshod Resume.pdf";

const Header = () => {
  const [delayDone, setDelayDone] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayDone(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const ready = delayDone && imageLoaded;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#14011b]">
      <ConnectedDots />

      {!ready && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#14011b]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-[#cd5ff8] border-t-transparent rounded-full animate-spin" />
            <p className="text-[#cd5ff8] text-lg font-medium animate-pulse">
              Loading...
            </p>
          </div>
        </div>
      )}

      <div
        className="relative z-10 w-full max-w-[1370px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-[260px]"
        style={{ visibility: ready ? "visible" : "hidden" }}
      >
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <h3 className="text-[#cd5ff8] text-xl md:text-2xl font-medium mb-4 tracking-widest uppercase">
            Welcome to my world
          </h3>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Hi There!{" "}
            <span className="inline-block animate-bounce-slow">👋</span>
          </h1>

          <h1 className="text-3xl md:text-5xl text-white mt-4 font-bold tracking-tight">
            I'M{" "}
            <span className="text-[#cd5ff8] drop-shadow-[0_0_15px_rgba(205,95,248,0.5)]">
              DILSHOD UMBAROV
            </span>
          </h1>

          <div className="h-[50px] md:h-[70px] mt-6">
            <h2 className="text-2xl md:text-4xl text-gray-300 font-semibold italic">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Developer",
                  "TypeScript Developer",
                  "Next.js Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
          </div>

          <div className="mt-10 flex   lg:ml-[-280px] margin-bottom-[10px]">
            <a
              href={cv}
              download="Dilshod_Umbarov_CV.pdf"
              className="group relative flex  gap-3  border-2 border-[#cd5ff8] text-white px-10 py-2 rounded-[6px] overflow-hidden transition-all duration-300 hover:bg-transparent "
            >
              <AiOutlineDownload className="text-2xl  transition-transform" />
              <span className="font-bold tracking-tighter uppercase">
                Download CV
              </span>
            </a>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#cd5ff8]/20 blur-[120px] rounded-full animate-pulse"></div>

          <img
            className="relative w-full max-w-[450px] lg:max-w-[550px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float"
            src="https://my-portfolio-umber-psi-41.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg"
            alt="Development Illustration"
            width="550"
            height="550"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
