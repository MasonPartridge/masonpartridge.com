import React, { useState } from "react";
import Title from "@components/Title";

export default function WorkHistory(props) {
  const { isMobile } = props;
  return (
    <div className="w-full flex flex-col gap-16">
      <Title title={"Work History"} prefix={"04."} />
      <div className="flex flex-col gap-8">
        {WORKDATA.map((work, index) => (
          <WorkSection isMobile={isMobile} key={index} workId={index} />
        ))}
      </div>
    </div>
  );
}

const WORKDATA = [
  {
    title: "Full Stack Developer",
    company: "Community Ali",
    date: "2023-2024",
    location: "Medesto, California",
    role: "Full Stack Developer",
    Skills: [
      "React.js",
      "Tailwindcss",
      "Webpack",
      "Next.js",
      "Node",
      "Express",
      "Mongoose",
      "MongoDB",
      "AWS",
    ],
    description:
      "I worked on two websites with the Community Ali team: The Community Ali website and a website for MJC's club applications. We are currently working on an advertisement webpage for a local construction company named Schoolland Construction. My main contributions have to be teaching the team git, convincing them and training them to use React.js and tailwind, and being the bridge between our backend and frontend developers implementing heavy backend dependant frontend features or refactoring the frontend to work with the backend apic calls.",
  },
  {
    title: "Web Developer",
    company: "Digital Nest",
    date: "2023-2024",
    location: "Medesto, California",
    role: "Full Stack Developer",
    Skills: [
      "React.js",
      "Tailwindcss",
      "Webpack",
      "Next.js",
      "Node",
      "Express",
      "Mongoose",
      "MongoDB",
      "AWS",
      "Wordpress",
    ],
    description: "I worked as an web development intern at Digitalnest where I was part of a special detachment for making full stack non-wordpress sites unlike like the rest of the company. Still got some training on how to do wordpress though and was supervised by Alex Rodriguez. The company paid me to continue work Community Ali projects when I was there and trained me and the Community Ali team to better utilize our tools.",
  },
];

function WorkSection(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { workId, isMobile } = props;
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="h-20 flex items-center justify-between text-xl lg:text-4xl p-4 px-8 bg-accent"
      >
        <h2>{`${WORKDATA[workId].title} @ ${WORKDATA[workId].company}`}</h2>
        <div className="flex items-center gap-4">
          {isMobile && <p>{WORKDATA[workId].date}</p>}
          <div>
            {isExpanded ? "^" : ">"}
          </div>
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
