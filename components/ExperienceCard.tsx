import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/types/Experience";
import Image from "next/image";

type Props = {
  experience: Experience;
};

export function ExperienceCard({ experience }: Props) {
  return (
    <article className="justify relative flex w-auto flex-shrink-0 snap-center flex-col items-center overflow-hidden rounded-lg bg-[#292929] py-8 px-14 transition-opacity duration-200">
      <Image
        src={experience.img}
        height={150}
        width={150}
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />

      <div className="py-6 px-0 md:px-10">
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
