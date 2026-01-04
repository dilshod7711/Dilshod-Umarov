import { SiVercel } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import React from "react";
import ConnectedDots from "../header/ConnectedDots.jsx";

import ebay from "../../assets/ebay.png";
import eurolink from "../../assets/eurolink.png";
import ezma from "../../assets/ezma.png";
import admin from "../../assets/ezmaAdmin.png";
import beautybay from "../../assets/beuty.png";

const Projects = () => {
  const myProjects = [
    {
      title: "EuroLink Consulting Group",
      description:
        "The project is built using Vite, React, and Tailwind CSS, with a high level of optimization.",
      image: eurolink,
      tech: ["React", "Tailwind", "Vite", "SEO"],
      live: "https://eurolink-cg-delta.vercel.app/",
    },
    {
      title: "Ezma Library",
      description:
        "An interactive and modern library platform. Users can search, sort, and manage books through a user-friendly interface.",
      image: ezma,
      tech: ["React", "Tailwind", "Vite", "Swiper.js"],
      github: "https://github.com/dilshod2007/PLATEFORM.git",
      live: "https://ezma-blond.vercel.app/",
    },
    {
      title: "Ezma Admin Dashboard",
      description:
        "Ezma library platform management system. Allows you to manage users, track book statistics, and edit the library database in real time.",
      image: admin,
      tech: ["React", "Tailwind", "Vite", "Zustand"],
      live: "https://ezma-admin-jq4d.vercel.app/",
    },

    {
      title: "Beauty Bay",
      description: "E-commerce platform for beauty and care products.",
      image: beautybay,
      tech: ["React", "TypeScript", "E-commerce"],
      live: "https://beauty-bay-iota.vercel.app/",
    },
  ];

  return (
    <>
      <ConnectedDots />
      <div className="mt-[100px] max-w-[1400px] mx-auto p-[20px] md:p-[50px]">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-2xl text-[#cd5ff8]">
            Here are a few projects I've worked on recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[60px]">
          {myProjects.map((project, index) => (
            <div
              key={index}
              className="group relative border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-500 bg-transparent hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col"
            >
              <div className="p-4 pb-0">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[210px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#cd5ff8] transition-colors">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow italic">
                  "{project.description}"
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-[11px] font-semibold tracking-wider uppercase border border-purple-500/30 rounded-full text-[#cd5ff8] bg-purple-500/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent w-full mb-5" />

                <div className="flex items-center justify-between">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#cd5ff8] hover:text-white font-semibold transition group/link"
                  >
                    <FiExternalLink className="text-xl group-hover/link:-translate-y-1 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
