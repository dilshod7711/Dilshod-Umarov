import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          : "py-4 md:py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1370px] mx-auto flex justify-between items-center px-4 sm:px-6">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white cursor-pointer group">
          DU
          <span className="text-[#cd5ff8] group-hover:drop-shadow-[0_0_8px_#cd5ff8] transition-all">
            .Dev
          </span>
        </h1>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
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
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu button (Menu <-> X) */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#cd5ff8]/60 text-white hover:bg-[#cd5ff8]/10 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiOutlineMenuAlt3 className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile dropdown (row layout) */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          menuOpen ? "max-h-32" : "max-h-0"
        }`}
      >
        <div className="mx-4 sm:mx-6 mt-2 rounded-lg bg-[#14011b]/95 border border-purple-500/20 shadow-xl backdrop-blur-lg">
          <ul className="flex flex-row flex-wrap items-center justify-center gap-2 p-3">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white/10 text-[#cd5ff8]"
                        : "text-gray-200 hover:bg-white/5 hover:text-[#cd5ff8]"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
