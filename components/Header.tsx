import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-50 mx-auto flex max-w-7xl items-start justify-between p-5 pt-8 xl:items-center">
      <motion.div
        initial={{
          opacity: 0,
          x: -500,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <a
          className="flex flex-row items-center font-medium text-gray-400 text-sm"
          href="#hero"
        >
          <BsCodeSlash
            className="h-12 w-12 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
            title="LinkedIn"
          />
          czachor.dev
        </a>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 500,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex items-center"
      >
        <a href="https://www.linkedin.com/in/davidczachor/">
          <SiLinkedin
            className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
            title="LinkedIn"
          />
        </a>
        <a href="https://github.com/davidczachor">
          <SiGithub
            className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
            title="Github"
          />
        </a>
      </motion.div>
    </header>
  );
}
