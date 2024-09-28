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
    introduction: TSection;
    achievements: TSection;
    timeline: TSection;
    questionnaire: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: "Dihu ơi",
  },
  sections: {
    introduction: {
      p: "Cher ma dieu,",
      h2: "Introduction",
      content: "Cảm ơn em đã đi chơi anh 2 tháng nay. Anh biết anh nợ em 1 câu hỏi. Nhưng mà trước hết cùng điểm qua những gì mình đã làm nhé!!!"
    },
    timeline: {
      p: "Our love story hehe.",
      h2: "Timeline",
    },
    achievements: {
      p: "Our milestones, approximately nhá.",
      h2: "Achievements",
    },
    questionnaire: {
      p: "Uki chốt lại là cho anh hỏi nè.",
      h2: "The Question",
    },
  },
};
