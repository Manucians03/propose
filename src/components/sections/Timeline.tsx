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
        background: "#8D765B",
        color: "#fff",
        boxShadow: "0px 35px 120px -15px #25190d",
        borderRadius: "20px",
        borderWidth: "3px",
        borderColor: "#4f4233",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #8D765B" }}
      iconStyle={{
        background: "#fff", 
        border: "none",
        boxShadow: "none", 
      }}
      date={timeline.date}
    >
      <h3 className="text-[24px] font-bold text-white">{timeline.name}</h3>
      {timeline.photo !== "" && <img
        src={timeline.photo}
        className="w-full h-[300px] object-cover rounded-[20px] mt-3"
      />}
      <p className="text-[18px] font-medium text-white">
        {timeline.description}
      </p>

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
