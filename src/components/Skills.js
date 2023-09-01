import React, { useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import CSSLogo from "@picture/skill_logos/CSS.jpeg";
import HTMLLogo from "@picture/skill_logos/HTML.png";
import JSLogo from "@picture/skill_logos/JS.webp";
import ReactLogo from "@picture/skill_logos/React.png";
import NodeLogo from "@picture/skill_logos/Node.png";
import ExpressLogo from "@picture/skill_logos/Express.png";
import TailwindLogo from "@picture/skill_logos/Tailwind.png";
import WebpackLogo from "@picture/skill_logos/Webpack.png";
import MongoDBLogo from "@picture/skill_logos/MongoDB.png";

export default function Skills() {
  const skills = [
    {
      image: CSSLogo,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      image: HTMLLogo,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      image: JSLogo,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      image: ReactLogo,
      link: "https://reactjs.org/",
    },
    {
      image: NodeLogo,
      link: "https://nodejs.org/en/",
    },
    {
      image: ExpressLogo,
      link: "https://expressjs.com/",
    },
    {
      image: TailwindLogo,
      link: "https://tailwindcss.com/",
    },
    {
      image: WebpackLogo,
      link: "https://webpack.js.org/",
    },
    {
      image: MongoDBLogo,
      link: "https://www.mongodb.com/",
    },
  ];

  const scrollRef = React.useRef(null);
  const { events } = useDraggable(scrollRef)

  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const [clientX, setClientX] = useState(0);

  function onMouseDown(event) {
    setIsScrolling(true);
    setClientX(event.clientX);
  }

  function onMouseUp(event) {
    setIsScrolling(false);
  }

  function onMouseMove(event) {
    if (isScrolling) {
      scrollRef.current.scrollLeft = scrollX + event.clientX - clientX;
      setScrollX(scrollX + event.clientX - clientX);
      setClientX(event.clientX);
    }
  }

  return (
    <div className="flex flex-col gap-8 justify-center w-[100%] items-center h-[45vh] bg-slate-900 text-white px-32">
      <h1 className="text-[300%] font-bold">Skills</h1>
      <div
        {...events}
        ref={scrollRef}
        className="flex flex-row gap-8 overflow-x-scroll scroll-hidden w-[100%]"
      >
        {skills.map((skill) => {
          return (
            <a key={skill.link} className="h-[256px] flex-shrink-0 w-[256px]">
              <img
                className="bg-white w-[100%] h-[100%] rounded-full"
                src={skill.image}
                alt="logo"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
