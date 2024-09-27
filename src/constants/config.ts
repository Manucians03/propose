type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
  };
  sections: {
    achievement: TSection;
    timeline: TSection;
    question?: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: "Dihu ơi",
  },
  sections: {
    achievement: {
      p: "Achievement",
      h2: "Our milestones.",
    },
    timeline: {
      p: "Timeline",
      h2: "Our love story.",
    },
  },
};
