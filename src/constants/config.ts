type TSection = {
  p: string;
  h2: string;
  content?: any;
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
      content: "Cảm ơn em đã nhận lời đi chơi với anh và yêu thương anh. Anh vô cùng ngạo nghễ vì đã là người được em lựa chọn và tin tưởng. 2 tháng vừa qua anh rất vui, và dù rằng mình chưa official nhưng bên trong anh đã coi em là bồ từ lâu rồi hehe. Tuy vậy anh biết là anh vẫn nợ em 1 câu hỏi đàng hoàng, vậy nên anh đã viết con website này vừa để tặng em, vừa để hỏi em một cách tử tế. Trước hết mình hãy cùng điểm qua bảng vàng thành tích của Tuấn Minh và Diệu Hương nhé!"
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
      content: [
        {
          question: "Anh có thể làm người yêu em không? 🥹",
          yes: "Uki!",
          no: "Không choa!",
        },
        {
          question: "Es-tu sûr?!",
          yes: "Ouais.",
          no: "Non.",
        },
        {
          question: "Are you really really reallyyy sure?",
          yes: "Yesss baby let's kiss!",
          no: "Nooo I hate this game!",
        },
      ],
    },
  },
};
