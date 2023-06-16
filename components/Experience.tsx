import React from "react";
import { motion } from "framer-motion";
import { Experience as Experience } from "@/types/Experience";
import { ExperienceCard } from "./ExperienceCard";
import { FaDatabase } from "react-icons/fa";
import { SiCsharp, SiPython, SiTypescript } from "react-icons/si";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from "swiper";
import Conestoga from "../public/images/conestoga.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const experiences: Experience[] = [
  {
    img: Conestoga,
    company: "Conestoga College",
    position: "College Diploma",
    stackIcons: [SiPython, SiCsharp, SiTypescript, FaDatabase],
    period: ["Jan 2022", "Apr 2023"],
    bullets: [
      "Developed a strong understanding of relational databases and the ability to design, implement and maintain them.",
      "Acquired skills in web development technologies such as HTML, CSS, JavaScript, and ASP.net.",
      "Developed a deep understanding of system fundamentals, including operating systems, computer architecture, and networking.",
      "Learned and applied Object-Oriented Design principles to develop maintainable and scalable software.",
      "Developed a strong understanding of User Interface and User Experience (UI/UX) design principles and best practices, and ability to design and implement intuitive and user-friendly interfaces.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative mx-auto flex max-w-7xl flex-col items-center gap-4 sm:gap-12 overflow-hidden text-left md:px-10"
    >
      <h3 className="text-2xl uppercase tracking-[15px] text-gray-400 md:tracking-[20px] pt-24">
        Experience
      </h3>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ width: "95%" }}
      >
        {experiences.map((experience) => (
          <SwiperSlide key={experience.company}>
            <ExperienceCard experience={experience} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
