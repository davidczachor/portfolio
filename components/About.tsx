import Image from "next/image";
import React from "react";
import ProfilePicture from "../public/images/profile.jpg";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex min-h-screen flex-col max-w-7xl items-center gap-12 py-24 px-4 text-left md:px-10"
    >
      <h2 className="font-cal text-2xl uppercase tracking-[15px] text-gray-400 md:tracking-[20px]">
        About
      </h2>

      <div className="flex flex-col items-center md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="md:md-0 relative -mb-20 h-56 w-56 flex-shrink-0 md:h-72 md:w-72 xl:h-[500px] xl:w-[400px]"
        >
          <Image
            src={ProfilePicture}
            fill
            alt="me on vacation"
            className="rounded-full object-cover md:rounded-lg"
          />
        </motion.div>
        <div className="space-y-10 px-0 py-24 md:px-10 md:py-0">
          <p className="text-base">
            My name is David, a recent Software Engineering graduate from
            Conestoga College. I have a strong interest in web development and a
            passion for solving real-world problems through code. My skill set
            includes React, JavaScript, TypeScript, Next.js, CSS, HTML, Node,
            Express, and SQL.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
