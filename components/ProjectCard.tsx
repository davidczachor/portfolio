import React from "react";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="flex-shrink-0 flex flex-col items-center justify-center sm:20 md:p44 h-[75vh] sm:h-[70vh]">
      <Image
        src={project.img}
        height={200}
        width={200}
        alt={`Picture of ${project.name}`}
        className="relative h-36 w-36 sm:h-60 sm:w-60 md:h-fit md:w-fit object-scale-down sm:block"
      />
      <div className="space-y-4 sm:space-y-10 px-4 md:px-10 max-w-7xl">
        <Link href={project.link}>
          <h4 className="text-md sm:text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50">
            {project.name}
          </h4>
        </Link>
        <p className="text-sm sm:text-lg text-center md:text-left">
          {project.description}
        </p>
      </div>
    </article>
  );
}
