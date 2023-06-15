import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex min-h-screen flex-col max-w-7xl items-center gap-12 py-24 px-4 text-left md:px-10"
    >
      <h2 className="font-cal text-2xl uppercase tracking-[15px] text-gray-400 md:tracking-[20px]">
        Experience
      </h2>
    </motion.div>
  );
}
