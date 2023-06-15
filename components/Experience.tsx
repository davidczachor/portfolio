import React from "react";
import { motion } from "framer-motion";
import { Experience as Experience } from "@/types/Experience";
import { ExperienceCard } from "./ExperienceCard";
import { FaDatabase } from "react-icons/fa";
import { SiCsharp, SiPython, SiTypescript } from "react-icons/si";

export const experiences: Experience[] = [
  {
    img: "/../public/images/profile.jpg",
    title: "Software Developer",
    subtitle: "Test Company",
    stackIcons: [SiPython, SiCsharp, SiTypescript, FaDatabase],
    period: ["June 2023", "present"],
    bullets: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam et aperiam molestiae aliquam eum atque porro eligendi quidem iste ad ea consectetur suscipit, architecto reiciendis explicabo deleniti laudantium, excepturi rerum?",
    ],
  },
  {
    img: "/../public/images/profile.jpg",
    title: "Software Developer",
    subtitle: "Test Company",
    stackIcons: [SiPython, SiCsharp, SiTypescript, FaDatabase],
    period: ["June 2023", "present"],
    bullets: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam et aperiam molestiae aliquam eum atque porro eligendi quidem iste ad ea consectetur suscipit, architecto reiciendis explicabo deleniti laudantium, excepturi rerum?",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam et aperiam molestiae aliquam eum atque porro eligendi quidem iste ad ea consectetur suscipit, architecto reiciendis explicabo deleniti laudantium, excepturi rerum?",
    ],
  },
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative mx-auto flex max-w-7xl flex-col items-center gap-12 overflow-hidden py-14 px-4 text-left md:px-10"
    >
      <h3 className="font-cal text-2xl uppercase tracking-[15px] text-gray-400 md:tracking-[20px]">
        Experience
      </h3>
      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-accent-500/80 md:p-10 ">
        {/* Add 'overflow-x-scroll' */}
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
