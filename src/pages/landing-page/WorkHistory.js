import React, { useState } from "react";
import Title from "@components/Title";

export default function WorkHistory() {
  return (
    <div className="w-full flex flex-col gap-16">
      <Title title={"Work History"} prefix={"04."} />
      <div className="flex flex-col gap-8">
        {WORKDATA.map((work, index) => (
          <WorkSection key={index} workId={index} />
        ))}
      </div>
    </div>
  );
}

const WORKDATA = [
  {
    title: "Software Developer",
    company: "Company",
    date: "2020-2021",
    location: "City, State",
    role: "Full Stack Developer",
    Skills: ["React", "Node", "Express", "MongoDB"],
    description: "I worked",
  },
  {
    title: "Software Developer",
    company: "Company",
    date: "2020-2021",
    location: "City, State",
    role: "Full Stack Developer",
    Skills: ["React", "Node", "Express", "MongoDB"],
    description: "I worked",
  },
];

function WorkSection(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { workId } = props;
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="h-20 flex items-center justify-between text-4xl p-4 px-8 bg-accent"
      >
        <h2>{`${WORKDATA[workId].title} @ ${WORKDATA[workId].company}`}</h2>
        <div className="flex items-center gap-4">
          <p>{WORKDATA[workId].date}</p>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "^" : ">"}
          </button>
        </div>
      </button>
      {isExpanded && (
        <div className="bg-secondary p-8 text-2xl mx-4 flex flex-col gap-4">
          {[
            {
              title: "Location",
              description: WORKDATA[workId].location,
            },
            {
              title: "Role",
              description: WORKDATA[workId].role,
            },
            {
              title: "Skills",
              description: WORKDATA[workId].Skills.join(", "),
            },
            {
              title: "Description",
              description: WORKDATA[workId].description,
            },
          ].map((data, index) => (
            <p key={index}>
              <span className="text-4xl bg-primary">{data.title}</span>:{" "}
              {data.description}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
