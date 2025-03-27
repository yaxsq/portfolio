"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ibaLogo from "./iba-logo.png";
import wwfLogo from "./wwf-logo.png";



export default function Home() {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 300], [0, -300]); // Moves whole text up
  const starsY = useTransform(scrollY, [0, 500], [0, -300]); // Stars move faster than content
  const headerGlow = useTransform(scrollY, [500, 800], ["0%", "100%"]);

  // Static background stars reposition dynamically when scrolling
  const staticStars = Array.from({ length: 2500 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
  }));

  return (
    <main className="relative w-full h-[300vh] bg-black text-white">
      {/* Background Stars */}
      <motion.div className="absolute inset-0 h-[435vh] overflow-hidden pointer-events-none" style={{ y: starsY }}>
      {staticStars.map((star) => (
          <div key={star.id} className="absolute bg-white rounded-full" style={{
            width: `${star.size}px`, height: `${star.size}px`, top: `${star.y}%`, left: `${star.x}%`, opacity: Math.random() * 0.8 + 0.2,
          }} />
        ))}
      </motion.div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full p-4 bg-black/80 backdrop-blur-md flex justify-center space-x-8 border-b border-gray-700 z-50 h-16 items-center"
        style={{ boxShadow: `0px 0px ${headerGlow.get()} 10px rgba(138, 43, 226, 0.7)` }}>
        <Link href="#home"><span className="text-lg font-semibold hover:text-gray-400 transition">Home</span></Link>
        <Link href="#projects"><span className="text-lg font-semibold hover:text-gray-400 transition">Projects</span></Link>
        <Link href="#work"><span className="text-lg font-semibold hover:text-gray-400 transition">Work Experience</span></Link>
        <Link href="#about"><span className="text-lg font-semibold hover:text-gray-400 transition">About Me</span></Link>
      </header>

      {/* Home Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center text-center">
        <motion.h1 className="text-5xl font-extrabold text-white" style={{ y: textY }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Welcome to My Portfolio</span>
          <span className="inline-block"> 🚀</span>
        </motion.h1>
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-4xl font-bold text-purple-400">Projects</h2>
        <div className="grid grid-cols-2 gap-6 mt-6 max-w-5xl">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg text-white">A Privacy-Centric Approach to LLMs</h3>
            <p className="text-gray-300">Analyzed employees’ interactions with LLMs and proposed a privacy-focused framework to mitigate risks.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg text-white">SHA-256 in xv6</h3>
            <p className="text-gray-300">Implemented SHA-256 hashing in C without libraries, boosting OS security by 50% in a constrained environment.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg text-white">AES on RISC-V</h3>
            <p className="text-gray-300">Implemented AES in Assembly on RISC-V for 128, 192, and 256-bit encryption, optimizing performance with vector extensions.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg text-white">Traffic Light Simulation</h3>
            <p className="text-gray-300">Applied Q-Learning to optimize traffic flow dynamically, reducing congestion and improving efficiency by 95%.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg text-white">Library Management System</h3>
            <p className="text-gray-300">Developed a secure LMS using a custom blockchain for enhanced data integrity and access control.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg text-white">More to come!</h3>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-4xl font-bold text-purple-400">Work Experience</h2>

        <div className="grid grid-cols-2 gap-6 mt-6 max-w-5xl">
          
          {/* Teaching Assistant - IBA */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg flex items-center space-x-4">
            {/* Logo on the Left */}
            <Image src={ibaLogo} alt="IBA Logo" className="h-16 w-auto flex-shrink-0" width={64} height={64} />

            {/* Text Content on the Right */}
            <div className="flex flex-col">
              <h3 className="font-bold text-lg text-white">Institute of Business Administration</h3>
              <h4 className="font-semibold text-gray-300">Teaching Assistant - Introduction to Astronomy</h4>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Conducted tutorials for 150+ students, designed and graded assignments to enhance comprehension while also instilling curiosity about the universe. 
              </p>
            </div>
          </div>

          {/* WWF Pakistan - Eco Intern */}
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg flex items-center space-x-4">
            {/* Logo on the Left */}
            <Image src={wwfLogo} alt="WWF Logo" className="h-16 w-auto flex-shrink-0" width={64} height={64} />

            {/* Text Content on the Right */}
            <div className="flex flex-col">
              <h3 className="font-bold text-lg text-white">WWF Pakistan</h3>
              <h4 className="font-semibold text-gray-300">Eco Intern</h4>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Surveyed sustainable practices, developed strategies, and spread awareness about the environment.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* About Me Section */}
      <section id="about" className="h-screen flex flex-col items-center justify-center px-6 bg-black">

        <h2 className="text-4xl font-bold text-purple-400">About Me</h2>
        <p className="mt-4 text-lg text-gray-300 text-center">
          Computer Science Junior at IBA | CyberSecurity | Space Enthusiast
        </p>
        <div className="mt-4 flex space-x-4">
          <a href="https://www.linkedin.com/in/shazain/" className="text-blue-400" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a> | </a>
          <a href="http://github.com/yaxsq" className="text-blue-400" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-black text-gray-400 text-center border-t border-gray-700">
        <p>WWF® and ©1986 Panda Symbol are owned by WWF. All rights reserved.</p>
        <p>IBA Logo is the property of the Institute of Business Administration, Karachi. All rights reserved.</p>
      </footer>


    </main>
  );
}
