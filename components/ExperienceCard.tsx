import React from "react";
import { Experience } from "@/types/experience";
import Image from "next/image";

type Props = {
  experience: Experience;
};

export function ExperienceCard({ experience }: Props) {
  return (
    <article className="relative flex flex-col w-auto flex-shrink-0 snap-center overflow-hidden rounded-lg bg-[#292929] px-6 py-6 sm:py-12 sm:px-24 transition-opacity duration-200">
      <div className="container flex flex-row">
        <div className="content flex-grow lg:pt-6 sm:pt-9 pt-1">
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium">
            {experience.company}
          </h4>
          <p className="mt-1 text-sm sm:text-md md:text-lg lg:text-2xl font-semibold text-gray-300">
            {experience.position}
          </p>
          <div className="my-2 flex space-x-2">
            {experience.stackIcons?.map((Icon, index) => (
              <Icon
                key={index}
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
              />
            ))}
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-base uppercase text-gray-400">
            Start: {experience.period[0]} | End: {experience.period[1]}
          </p>
        </div>
        <div className="image flex-shrink-0 md:ml-6 py-4 md:py-0">
          <Image
            src={experience.img}
            height={200}
            width={200}
            alt={`Picture of ${experience.company} logo`}
            className="relative rounded-full md:rounded-lg h-20 w-20 sm:h-36 sm:w-36 md:h-40 md:w-40 object-scale-down lg:w-48 lg:h-48 sm:block bg-white"
          />
        </div>
      </div>
      <div className="mt-5 marker: space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-base md:text-md">
        {experience.bullets.map((bullet) => (
          <li
            className="before:bg-[#F7AB0A] before:rounded-full before:inline-block before:w-2 before:h-2 before:mr-2"
            key={bullet}
          >
            {bullet}
          </li>
        ))}
      </div>
    </article>
  );
}
