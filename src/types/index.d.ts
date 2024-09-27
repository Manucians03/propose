export type TTimeline = {
  name: string;
  photo: string;
  date: string;
  description: string;
}

export type TNavLink = {
  title: string;
  id: string;
}

export type TAchievement = {
  title: string;
  number: number;
}

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
