import { SiTelegram } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import React from "react";
import banner from "../../assets/about.png";
import ConnectedDots from "../header/ConnectedDots";
import Skillset from "../Skillset/Skillset";

const About = () => {
  return (
    <section className="relative min-h-screen bg-[#14011b] overflow-hidden pt-32 pb-20 mt-[100px]">
      <ConnectedDots />

      <div className="absolute top-40 -left-20 w-80 h-80 mt-[50px] bg-[#cd5ff8]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-3/5 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              KNOW WHO <span className="text-[#cd5ff8]">I'M</span>
            </h1>

            <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              <p>
                Hi Everyone, I am{" "}
                <span className="text-[#cd5ff8] font-bold ">
                  Dilshod Umbarov
                </span>
                from{"  "}
                <span className="text-[#cd5ff8]">Samarkand, Uzbekistan</span>. I
                am 19 years old and currently focused on building
                high-performance web applications.
              </p>

              <p>
                As a{" "}
                <span className="text-white font-medium">
                  Frontend Developer
                </span>
                , I specialize in creating responsive designs using
                <span className="text-white font-medium">
                  {" "}
                  Tailwind CSS
                </span>{" "}
                and building complex logic with{" "}
                <span className="text-white font-medium">React.js</span> and
                <span className="text-white font-medium"> Next.js</span>.
              </p>

              <p>
                My goal is to write clean, maintainable code using{" "}
                <span className="text-white font-medium">TypeScript</span>
                and leverage UI libraries like{" "}
                <span className="text-white font-medium">Ant Design</span>
                to deliver seamless user experiences.
              </p>
            </div>

            {/* Ijtimoiy tarmoqlar */}
            <div className="flex   mt-12">
              <SocialLink
                href="https://github.com/dilshod7711"
                icon={<AiFillGithub size={32} />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/dilshod-umbarov/"
                icon={<BsLinkedin size={28} />}
              />
              <SocialLink
                href="https://t.me/+998904471907"
                icon={<SiTelegram size={28} />}
              />
            </div>
          </div>

          {/* Rasm qismi */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Rasm ortidagi neon ramka */}
              <div className="absolute -inset-4 bg-[#cd5ff8]/20 rounded-full blur-2xl group-hover:bg-[#cd5ff8]/30 transition-all duration-500"></div>

              <img
                className="relative w-[300px] md:w-[450px] lg:w-[500px] h-auto transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-2 drop-shadow-[0_0_30px_rgba(205,95,248,0.3)]"
                src={banner}
                alt="About Illustration"
              />
            </div>
          </div>
        </div>

        {
          <div className="mt-32">
            <Skillset />
          </div>
        }
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#cd5ff8] hover:bg-[#cd5ff8] hover:text-white hover:shadow-[0_0_20px_rgba(205,95,248,0.5)] transition-all duration-300"
  >
    {icon}
  </a>
);

export default About;
