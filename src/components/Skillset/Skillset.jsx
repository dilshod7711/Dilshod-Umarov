import React from "react";
import {
  SiVisualstudiocode,
  SiVercel,
  SiNetlify,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
} from "react-icons/si";
import { GrWindows, GrReactjs } from "react-icons/gr";
import { DiJsBadge } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";

const Skillset = () => {
  // Skill ma'lumotlarini massivga olamiz, kod toza bo'lishi uchun
  const skills = [
    { icon: <AiFillHtml5 />, color: "hover:text-[#e34c26]", label: "HTML5" },
    { icon: <IoLogoCss3 />, color: "hover:text-[#264de4]", label: "CSS3" },
    { icon: <FaSass />, color: "hover:text-[#cc6699]", label: "SASS" },
    {
      icon: <SiBootstrap />,
      color: "hover:text-[#7952b3]",
      label: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      color: "hover:text-[#38bdf8]",
      label: "Tailwind",
    },
    { icon: <DiJsBadge />, color: "hover:text-[#f7df1e]", label: "JavaScript" },
    { icon: <GrReactjs />, color: "hover:text-[#61dafb]", label: "React" },
    {
      icon: <SiTypescript />,
      color: "hover:text-[#3178c6]",
      label: "TypeScript",
    },
    { icon: <SiRedux />, color: "hover:text-[#764abc]", label: "Redux" },
    { icon: <SiNextdotjs />, color: "hover:text-white", label: "Next.js" },
  ];

  const tools = [
    { icon: <GrWindows />, color: "hover:text-[#0078d6]" },
    { icon: <SiVisualstudiocode />, color: "hover:text-[#007acc]" },
    { icon: <SiVercel />, color: "hover:text-white" },
    { icon: <SiNetlify />, color: "hover:text-[#00adad]" },
  ];

  return (
    <div className="py-24 bg-transparent">
      {/* Skillset Section */}
      <h1 className="text-4xl md:text-5xl font-black text-white text-center mb-20">
        Professional{" "}
        <span className="text-[#cd5ff8] drop-shadow-[0_0_15px_rgba(205,95,248,0.5)]">
          Skillset
        </span>
      </h1>

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`group relative flex items-center justify-center border border-white/10 p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-[#cd5ff8]/50 hover:shadow-[0_0_30px_rgba(205,95,248,0.2)] hover:-translate-y-2`}
          >
            <div
              className={`text-6xl text-white/70 transition-all duration-300 ${skill.color} group-hover:scale-110`}
            >
              {skill.icon}
            </div>
            {/* Label on hover */}
            <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all text-[#cd5ff8] text-[10px] font-bold tracking-widest">
              {skill.label}
            </span>
          </div>
        ))}
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-white text-center mt-32 mb-20">
        <span className="text-[#cd5ff8]">Tools</span> I Use
      </h1>

      <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="group flex items-center justify-center border border-white/10 p-8 rounded-2xl bg-white/[0.02] transition-all duration-500 hover:border-[#cd5ff8]/50 hover:shadow-[0_0_30px_rgba(205,95,248,0.2)] hover:-translate-y-2"
          >
            <div
              className={`text-6xl text-white/70 transition-all duration-300 ${tool.color} group-hover:scale-110`}
            >
              {tool.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillset;
