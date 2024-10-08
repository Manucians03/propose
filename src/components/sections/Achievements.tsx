import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { achievements } from "../../constants";
import SectionWrapper from "../SectionWrapper";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../Header"

interface IAchievementCard {
  index: number;
  title: string;
  number: number;
}

const AchievementCard: React.FC<IAchievementCard> = ({ index, title, number }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#f9ebc7"
  >
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="shadow-card w-full rounded-[20px] border border-3 border-quinary"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[18px] px-12 py-5">
          <h1 className="text-[70px] font-bold text-quaternary">
            {number}
          </h1>
          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const Achievements = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.achievements} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.achievements.content}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {achievements.map((achievement, index) => (
          <AchievementCard key={achievement.title} index={index} {...achievement} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
