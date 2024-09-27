import type {
  TNavLink,
  TAchievement,
  TTimeline,
} from "../types";

import {
  
} from "../assets";

const navLinks: TNavLink[] = [
  {
    id: "achievement",
    title: "Achievement",
  },
  {
    id: "timeline",
    title: "Timeline",
  },
  {
    id: "question",
    title: "Question",
  },
];

const achievements: TAchievement[] = [
  {
    title: "Cốc trà đá",
    number: 15,
  },
  {
    title: "Bó hoa",
    number: 5,
  },
  {
    title: "Snaps",
    number: 10000,
  },
  {
    title: "Hours on call",
    number: 40,
  },
];

const timelines: TTimeline[] = [
  {
    name: "Lần đầu đi chơi",
    photo: "",
    date: "19/07/2024",
    description: "Không có ảnh hôm này huhu!!!",
  },
];

export { navLinks, timelines, achievements };
