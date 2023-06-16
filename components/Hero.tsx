import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import CartoonProfilePicture from "../public/images/cartoon-profile.jpg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Software Developer", "Problem Solver", "Team Player"],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 100,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={CartoonProfilePicture}
        width={500}
        height={500}
        alt="Profile Picture"
      />
      <div className="z-20">
        <h2 className="text-sm font-medium uppercase text-gray-400 pb-2 tracking-[10px]">
          {"David Czachor"}
        </h2>
        <h1 className="text-3xl sm:text-6xl font-medium py-2 sm:py-6">
          <span className="mr-1">
            {"I'm a "}
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="text-sm">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          {/* <Link href="#blog">
            <button className="heroButton">Blog</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
