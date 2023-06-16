import React from "react";
import { motion } from "framer-motion";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";
import Pokedex from "../public/images/pokedex-image.png";

export const projects: Project[] = [
  {
    img: Pokedex,
    name: "Simple React Pokedex",
    link: "https://pokedex.czachor.dev",
    description:
      "Constructed an interactive Pokedex application featuring capabilities such as search, caching, and infinite scrolling. The application showcases a responsive design and was built using Vite and React.",
  },
  {
    img: Pokedex,
    name: "Test 2",
    link: "https://pokedex.czachor.dev",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut obcaecati quibusdam, impedit velit aperiam, quas atque, non itaque odit quidem enim porro? Aspernatur libero sit, ad perspiciatis saepe vitae",
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative mx-auto flex max-w-7xl flex-col items-center gap-4 sm:gap-12 overflow-hidden text-left md:px-10"
    >
      <h3 className="text-2xl uppercase tracking-[15px] text-gray-400 md:tracking-[20px] pt-24">
        Projects
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
        {projects.map((project, i) => (
          <SwiperSlide key={project.name}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] sm:h-[500px] -skew-y-12 "></div>
    </motion.div>
  );
}
