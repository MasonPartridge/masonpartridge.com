import React, { useState, useEffect } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { useStopwatch, useTimer } from "react-timer-hook";
import ScrollCarousel from "scroll-carousel-react";

import CSSLogo from "@picture/skill_logos/CSS.png";
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

  const autoScrollInvervalInSeconds = 2;
  const autoScrollJumpPx = 256;
  const scrollRef = React.useRef(null);
  const { events } = useDraggable(scrollRef);
  const { seconds, reset } = useStopwatch({ autoStart: true });

  const [scrollX, setScrollX] = useState(2427);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    console.log(seconds);
    if (isAutoScrolling && seconds >= autoScrollInvervalInSeconds) {
      scrollRef.current.scrollLeft =
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth
          ? scrollRef.current.scrollLeft + autoScrollJumpPx
          : 0;
      reset();
    }
  }, [seconds]);

  return (
    <div
      className="flex flex-col gap-8 justify-center w-[100%] items-center h-[45vh] bg-slate-900 text-white px-32"
      id="skills"
    >
      <h1 className="text-[300%] font-bold">Skills</h1>
      <div className="w-[100%] gap-8 flex">
        <button className="text-[500%]">&lt;</button>
        <div
          {...events}
          ref={scrollRef}
          className="flex flex-row gap-8 justify-center overflow-x-scroll cursor-grab scroll-hidden w-[100%]"
        >
          {[0, 1].map((loop) => {
            return skills.map((skill) => {
              return (
                <a
                  target="_blank"
                  key={skill.link}
                  href={skill.link}
                  className="h-[256px] flex-shrink-0 w-[256px]"
                >
                  <img
                    className="bg-white w-[100%] h-[100%] rounded-full object-contain"
                    src={skill.image}
                    alt="logo"
                  />
                </a>
              );
            });
          })}
        </div>
        <button className="text-[500%]">&gt;</button>
      </div>
    </div>
  );
}
