import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { timelines } from "../../constants";
import SectionWrapper from "../SectionWrapper";
import { Header } from "../Header";
import { TTimeline } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TTimeline> = (timeline) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={timeline.date}
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{timeline.name}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {timeline.name}
        </p>
      </div>

      {timeline.description}
      {timeline.photo}
    </VerticalTimelineElement>
  );
};

const Timeline = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.timeline} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {timelines.map((timeline, index) => (
            <ExperienceCard key={index} {...timeline} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Timeline, "timeline");
