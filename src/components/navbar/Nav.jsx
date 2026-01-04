import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#14011b]/70 backdrop-blur-lg border-b border-purple-500/20 shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1370px] mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white cursor-pointer group">
          DU
          <span className="text-[#cd5ff8] group-hover:drop-shadow-[0_0_8px_#cd5ff8] transition-all">
            .Dev
          </span>
        </h1>

        {/* Links */}
        <ul className="flex gap-8 items-center">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-sm md:text-[16px] font-medium tracking-wide transition-all duration-300 hover:text-[#cd5ff8] relative pb-1
                  ${
                    isActive
                      ? "text-[#cd5ff8] after:w-full"
                      : "text-gray-300 after:w-0"
                  }
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#cd5ff8] after:transition-all after:duration-300 hover:after:w-full`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
