import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { RxTriangleLeft } from "react-icons/rx";
import Logo from "../public/images/logo.png";
import { motion } from "framer-motion";
import Image from "next/image";

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
          className="flex flex-row items-center font-medium tra text-gray-200 text-sm"
          href="#hero"
        >
          <Image
            className="relative rounded-full h-12 w-12 mx-auto object-cover"
            src={Logo}
            width={500}
            height={500}
            alt="Profile Picture"
          />
          {"DAVID"} <br />
          {"CZACHOR."}
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
            className="h-10 w-10 cursor-pointer fill-gray-300 p-2 text-2xl transition-colors hover:fill-gray-200"
            title="LinkedIn"
          />
        </a>
        <a href="https://github.com/davidczachor">
          <SiGithub
            className="h-10 w-10 cursor-pointer fill-gray-300 p-2 text-2xl transition-colors hover:fill-gray-200"
            title="Github"
          />
        </a>
      </motion.div>
    </header>
  );
}
