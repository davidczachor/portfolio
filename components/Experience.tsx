import React from "react";
import { motion } from "framer-motion";
import { Experience as Experience } from "@/types/Experience";
import { ExperienceCard } from "./ExperienceCard";
import { FaDatabase } from "react-icons/fa";
import { SiCsharp, SiPython, SiTypescript } from "react-icons/si";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const experiences: Experience[] = [
  {
    img: "/../public/images/profile.jpg",
    title: "Software Developer",
    subtitle: "Test Company",
    stackIcons: [SiPython, SiCsharp, SiTypescript, FaDatabase],
    period: ["June 2023", "present"],
    bullets: [
      "This is a point. This is a point. This is a point. This is a point. This is a point.",
      "This is a point. This is a point. This is a point. This is a point. This is a point.",
      "This is a point. This is a point. This is a point. This is a point. This is a point.",
      "This is a point. This is a point. This is a point. This is a point. This is a point.",
    ],
  },
  {
    img: "/../public/images/profile.jpg",
    title: "Software Developer",
    subtitle: "Test Company",
    stackIcons: [SiPython, SiCsharp, SiTypescript, FaDatabase],
    period: ["June 2023", "present"],
    bullets: [
      "This is a point. This is a point. This is a point. This is a point. This is a point.",
      "This is a point. This is a point. This is a point. This is a point. This is a point.",
      "This is a point. This is a point. This is a point. This is a point. This is a point.",
      "This is a point. This is a point. This is a point. This is a point. This is a point.",
    ],
  },
  {
    img: "/../public/images/profile.jpg",
    title: "Software Developer",
    subtitle: "Test Company",
    stackIcons: [SiPython, SiCsharp, SiTypescript, FaDatabase],
    period: ["June 2023", "present"],
    bullets: [
      "This is a point. This is a point. This is a point. This is a point. This is a point.",
      "This is a point. This is a point. This is a point. This is a point. This is a point.",
      "This is a point. This is a point. This is a point. This is a point. This is a point.",
      "This is a point. This is a point. This is a point. This is a point. This is a point.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative mx-auto flex max-w-7xl flex-col items-center gap-12 overflow-hidden py-24 text-left md:px-10"
    >
      <h3 className="text-2xl uppercase tracking-[15px] text-gray-400 md:tracking-[20px]">
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
          <SwiperSlide key={experience.title}>
            <ExperienceCard experience={experience} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
