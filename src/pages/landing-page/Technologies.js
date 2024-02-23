import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Title from "@components/Title.js";

import CSSLogo from "@picture/skill_logos/CSS.png";
import HTMLLogo from "@picture/skill_logos/HTML.png";
import JSLogo from "@picture/skill_logos/JS.webp";
import ReactLogo from "@picture/skill_logos/React.png";
import NodeLogo from "@picture/skill_logos/Node.png";
import ExpressLogo from "@picture/skill_logos/Express.png";
import TailwindLogo from "@picture/skill_logos/Tailwind.png";
import WebpackLogo from "@picture/skill_logos/Webpack.png";
import MongoDBLogo from "@picture/skill_logos/MongoDB.png";
import GithubLogo from "@picture/skill_logos/Github.png";
import GitLogo from "@picture/skill_logos/Git.png";
import TypescriptLogo from "@picture/skill_logos/Typescript.png";
import NPMLogo from "@picture/skill_logos/NPM.png";
import NextJSLogo from "@picture/skill_logos/NextJS.png";

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
    {
      image: GithubLogo,
      link: "https://github.com/MasonPartridge",
    },
    {
      image: GitLogo,
      link: "https://git-scm.com/",
    },
    {
      image: TypescriptLogo,
      link: "https://www.typescriptlang.org/",
    },
    {
      image: NPMLogo,
      link: "https://www.npmjs.com/",
    },
    {
      image: NextJSLogo,
      link: "https://nextjs.org/",
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay({ delay: 1250, play: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-[100%] flex justify-center ">
      <div
        className="flex flex-col gap-8 justify-center w-[100%] items-center text-white"
        id="skills"
      >
      <Title prefix="02." title="Technologies" />
        <div className="w-[100%] gap-1 justify-center flex">
          <button
            className="embla__next border-white w-[2vw] hover:text-[2vw]"
            onClick={scrollPrev}
          >
            <i className="fa-solid text-white fa-caret-right fa-flip-horizontal w-2 hover:text-[2vw]"></i>
          </button>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {skills.map((skill) => {
                return (
                  <a
                    target="_blank"
                    key={skill.link}
                    href={skill.link}
                    className="embla__slide mx-3 border border-white p-1 border-dashed"
                  >
                    <img
                      className="w-[100%] h-[100%] object-contain"
                      src={skill.image}
                      alt="logo"
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <button
            className="embla__next border-white w-[2vw] hover:text-[2vw]"
            onClick={scrollNext}
          >
            <i className="fa-solid text-white fa-caret-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
