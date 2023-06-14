import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import ProfilePicture from "../public/images/cartoon-profile.jpg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Software Developer",
      "Code Crafter",
      "Web Developer",
      "Problem Solver",
      "Full Stack Developer",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 100,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={ProfilePicture}
        width={500}
        height={500}
        alt="Profile Picture"
      />
      <div className="z-20">
        <h2 className="text-sm font-semibold uppercase text-gray-500 pb-2 tracking-[10px]">
          {"David Czachor"}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">
            {"I'm a "}
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          {/* <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link> */}
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#blog">
            <button className="heroButton">Blog</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
