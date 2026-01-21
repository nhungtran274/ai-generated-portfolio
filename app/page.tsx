import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-blue-500 to-purple-600">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-white text-center z-10"
      >
        <h1 className="text-5xl font-bold mb-4">John Doe</h1>
        <h2 className="text-2xl font-semibold">Web Developer</h2>
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg">I am a passionate web developer specializing in building modern, user-friendly websites.</p>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 my-4">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-top-lg" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <ProjectCard
          title="Project 1"
          description="A brief description of Project 1."
          imageSrc="/project1.png"
        />
        <ProjectCard
          title="Project 2"
          description="A brief description of Project 2."
          imageSrc="/project2.png"
        />
        <ProjectCard
          title="Project 3"
          description="A brief description of Project 3."
          imageSrc="/project3.png"
        />
      </div>
    </section>
  );
};

const SkillBadge = ({ skill }) => {
  return (
    <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded mr-2 mb-2">{skill}</span>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <SkillBadge skill="HTML" />
        <SkillBadge skill="CSS" />
        <SkillBadge skill="JavaScript" />
        <SkillBadge skill="React" />
        <SkillBadge skill="TypeScript" />
        <SkillBadge skill="Tailwind CSS" />
        <SkillBadge skill="Framer Motion" />
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows={3} className="mt-1 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactForm />
      </main>
    </div>
  );
}