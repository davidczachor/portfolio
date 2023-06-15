import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/types/Experience";
import Image from "next/image";

type Props = {
  experience: Experience;
};

export function ExperienceCard({ experience }: Props) {
  return (
    <article className="relative flex w-full flex-shrink-0 snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative h-32 w-32 xl:h-[200px] xl:w-[200px]"
      >
        <Image
          src={experience.img}
          height={200}
          width={200}
          alt=""
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-medium md:text-4xl">{experience.title}</h4>
        <p className="mt-1 text-lg font-bold md:text-2xl">
          {experience.subtitle}
        </p>
        <div className="my-2 flex space-x-2">
          {experience.stackIcons?.map((Icon, index) => (
            <Icon key={index} className="h-10 w-10" />
          ))}
        </div>

        <p className="py-5 text-sm uppercase text-gray-300 md:text-base">
          Start: {experience.period[0]} | End: {experience.period[1]}
        </p>

        <ul className="ml-5 list-disc space-y-4 text-base md:text-lg">
          {experience.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
