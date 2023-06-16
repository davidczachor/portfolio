import { StaticImageData } from "next/image";
import { type IconType } from "react-icons/lib";

export interface Experience {
  img: StaticImageData;
  company: string;
  position: string;
  stackIcons?: IconType[];
  period: [string, string];
  bullets: string[];
}
