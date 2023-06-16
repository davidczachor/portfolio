import { StaticImageData } from "next/image";

export interface Project {
  img: StaticImageData;
  name: string;
  link: string;
  description: string;
}
