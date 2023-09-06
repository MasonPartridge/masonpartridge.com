import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

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

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 1250, play: true})]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div
      className="flex flex-col gap-8 justify-center w-[100%] items-center py-32 bg-slate-900 text-white px-8 xl:px-32"
      id="skills"
    >
      <h1 className="text-[300%] font-bold">Skills</h1>
      <div className="w-[100%] gap-8 justify-center flex">
        <button className="embla__next border-white w-[42px]" onClick={scrollPrev}>
        <i className="fa-solid text-white fa-caret-right fa-flip-horizontal w-[2vw] hover:text-[2vw]"></i>
        </button>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {skills.map((skill) => {
              return (
                <a
                  target="_blank"
                  key={skill.link}
                  href={skill.link}
                  className="embla__slide mx-1"
                >
                  <img
                    className="bg-white w-[100%] h-[100%] rounded-full object-contain"
                    src={skill.image}
                    alt="logo"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <button className="embla__next border-white w-[2vw] hover:text-[2vw]" onClick={scrollNext}>
        <i className="fa-solid text-white fa-caret-right"></i>
        </button>
      </div>
    </div>
  );
}
