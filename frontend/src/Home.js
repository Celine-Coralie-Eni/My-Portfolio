// import Home from "./components/Home";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/Celine-Coralie-Eni",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/celine-coralie-eni-a726a0342",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
      </svg>
    ),
  },
];

function Home({ theme, onToggleTheme }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="bg-[#f9fafb] dark:bg-[#1f2937] min-h-screen font-[Poppins] text-[#1f2937] dark:text-white transition-all">
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />

      <section
        id="hero"
        className="pt-28 pb-10 flex flex-col items-center text-center px-4"
      >
        <div className="relative mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#1e3a8a] to-blue-400 p-1 flex items-center justify-center shadow-md">
            <img
              src="/images/Ce.jpeg"
              alt="Celine-Coralie"
              className="w-16 h-16 object-cover rounded-full border border-white shadow"
            />
          </div>
        </div>
        <h1 className="text-4xl font-extrabold text-[#1e3a8a] mb-1 tracking-tight">
          𝒞eline-Coralie
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Full Stack Developer
        </h2>
        <p className="max-w-xl mx-auto mb-4 text-base sm:text-lg">
          I build modern, scalable, and beautiful web applications with a focus
          on clean code and great user experience.
        </p>
        <div className="flex justify-center gap-2 mb-3">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 border border-[#e5e7eb] rounded-full p-1.5 shadow hover:bg-[#3b82f6] hover:text-white hover:scale-105 transition-all"
              aria-label={s.name}
              title={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-block bg-[#1e3a8a] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-[#3b82f6] transition-colors duration-200 text-base"
        >
          Say Hello!
        </a>
      </section>

      {/* The rest of your About, Projects, Contact, Footer sections stay unchanged and preserve logic */}
    </div>
  );
}

export default Home;
