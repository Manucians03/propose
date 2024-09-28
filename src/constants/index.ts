import type {
  TNavLink,
  TAchievement,
  TTimeline,
} from "../types";

const navLinks: TNavLink[] = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "timeline",
    title: "Timeline",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "questionnaire",
    title: "The Question",
  },
];

const achievements: TAchievement[] = [
  {
    title: "Bó hoa",
    number: 5,
  },
  {
    title: "Cốc trà đá",
    number: 15,
  },
  {
    title: "Hours on call",
    number: 40,
  },
  {
    title: "Snaps",
    number: 10000,
  },
];

const timelines: TTimeline[] = [
  {
    name: "Xem Before Runrise",
    photo: "",
    date: "14/04/2024",
    description: "Lol",
  },
  {
    name: "Lần đầu đi chơi",
    photo: "/src/assets/images/landau.png",
    date: "19/07/2024",
    description: "Không có ảnh hôm này huhu!!!",
  },
  {
    name: "Lần đầu đi chơi",
    photo: "",
    date: "19/07/2024",
    description: "Không có ảnh hôm này huhu!!!",
  },
  {
    name: "Lần đầu đi chơi",
    photo: "",
    date: "19/07/2024",
    description: "Không có ảnh hôm này huhu!!!",
  },
  {
    name: "Lần đầu đi chơi",
    photo: "",
    date: "19/07/2024",
    description: "Không có ảnh hôm này huhu!!!",
  },
];

export { navLinks, timelines, achievements };
