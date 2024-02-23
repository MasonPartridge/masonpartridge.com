import React from "react";
import Title from "@components/Title";

export default function WorkHistory() {
  return (
    <div className="w-full flex flex-col gap-16">
      <Title title={"Work History"} prefix={".04"} />
      {WORKDATA.map((work, index) => (
        <WorkSection key={index} workId={index} />
      ))}
    </div>
  );
}

const WORKDATA = [
  {
    title: "Software Developer",
    company: "Company",
    date: "2020-2021",
    description: "I worked",
  },
];

function WorkSection(props) {
  const { workId } = props;
  return (
    <div>
      <div className="h-20 flex items-center justify-between text-4xl bg-accent">
        <h2>{`${WORKDATA[workId].title} @ ${WORKDATA[workId].company}`}</h2>
        <div className="flex items-center">
          <p>{WORKDATA[workId].date}</p>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
}
