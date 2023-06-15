import { type IconType } from "react-icons/lib";

export interface Experience {
  img: string;
  title: string;
  subtitle: string;
  stackIcons?: IconType[];
  period: [string, string];
  bullets: string[];
}
