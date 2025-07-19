import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-blue-100 dark:border-gray-800 shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2 select-none">
          <span
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#1e3a8a] via-blue-500 to-cyan-300 shadow-lg border-2 border-white text-white text-3xl font-extrabold ring-2 ring-cyan-200 transition-all duration-300 hover:scale-110 hover:ring-blue-400 hover:shadow-blue-200/60 hover:shadow-lg"
            style={{
              fontFamily:
                "'Poppins', 'Segoe Script', 'Brush Script MT', cursive, sans-serif",
              letterSpacing: "-0.05em",
              textShadow:
                "0 4px 16px rgba(59,130,246,0.18), 0 1px 4px rgba(30,58,138,0.10)",
              filter: "drop-shadow(0 0 6px #3b82f6aa)",
            }}
          >
            ��
          </span>
          <span className="text-xl font-bold text-blue-600 dark:text-cyan-200 tracking-tight hidden sm:inline">
            Celine-Coralie
          </span>
        </a>
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-lg text-blue-600 dark:text-cyan-200 hover:bg-blue-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            onClick={onToggleTheme}
            aria-label="Toggle light/dark mode"
          >
            {theme === "dark" ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="5" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"
                />
              </svg>
            )}
          </button>
          <button
            className="md:hidden p-2 rounded-lg text-blue-600 dark:text-cyan-200 hover:bg-blue-50 dark:hover:bg-gray-800"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex gap-8 items-center font-medium text-blue-700 dark:text-cyan-200 ${
            open
              ? "block absolute bg-white dark:bg-gray-900 left-0 right-0 top-16 p-6 rounded-b-xl shadow-lg"
              : "hidden md:flex"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.name} className="my-2 md:my-0">
              <a
                href={link.href}
                className="hover:text-cyan-500 transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
