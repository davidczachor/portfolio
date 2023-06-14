import React from "react";
import { FaHome } from "react-icons/fa";
import { SiDiscord, SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { SlEnvolope } from "react-icons/sl";
import { motion } from "framer-motion";
import Link from "next/link";

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
        <Link href="/#hero">
          <FaHome
            className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors hover:fill-gray-300"
            title="Home"
          />
        </Link>
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
        <Link
          href="/#final-words"
          className="group flex cursor-pointer items-center"
        >
          <SlEnvolope className="h-10 w-10 cursor-pointer fill-gray-400 p-2 text-2xl transition-colors group-hover:fill-gray-300" />
          <span className="hidden font-cal text-sm uppercase text-gray-400 group-hover:text-gray-300 md:inline-flex">
            Contact
          </span>
        </Link>
      </motion.div>
    </header>
  );
}
