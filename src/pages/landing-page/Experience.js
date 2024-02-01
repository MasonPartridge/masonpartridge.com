import React, { useEffect, useState } from "react";

import CommunityAliThumbnail from "@picture/CommunityAliThumbnail.png";
import ProfilioThumbnail from "@picture/ProfilioThumbnail.png";
import PadserThumbnail from "@picture/PadserThumbnail.png";

function ExperienceCard(props) {
  if (props.imageSide === "center" || props.isMobile) {
    return (
      <div
        className="flex lx:flex-row flex-col lx:items-start items-center 
        lx:gap-16 gap-8 py-6"
      >
        <img
          className="lx:w-[600px] w-[100%] lx:max-h-[314px] shadow-2xl shadow-black"
          src={props.image}
          alt=""
        />
        <div className="h-[314px] flex flex-col">
          <div className="relative flex-grow item">
            <a
              href={props.link}
              target="_blank"
              className="text-[200%] text-highlight"
            >
              {props.title}
            </a>
            <p>{props.body}</p>
            {/* <div className="bg-gradient-to-t from-gray-900 absolute bottom-0 w-[100%] h-[30%]"></div> */}
          </div>
          {props.isMobile && (
            <button className="font-bold text-highlight pt-2 text-left">
              Learn More
            </button>
          )}
        </div>
      </div>
    );
  }
  if (props.imageSide === "left") {
    return (
      <div className="flex gap-16 py-6">
        <img
          className="w-[600px] my-auto shadow-2xl h-[314px] shadow-black "
          src={props.image}
          alt=""
        />
        <div className="flex flex-col">
          <div className="relative flex-grow item">
            <a
              href={props.link}
              target="_blank"
              className="md:text-[150%] text-highlight"
            >
              {props.title}
            </a>
            <p>{props.body}</p>
            {/* <div className="bg-gradient-to-t from-gray-900 absolute bottom-0 w-[100%] h-[30%]"></div> */}
          </div>
          {props.isMobile && (
            <button className="font-bold text-highlight pt-2 text-left">
              Learn More
            </button>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-16 py-6">
      <div className="flex flex-col">
        <div className="relative flex-grow item">
          <a
            href={props.link}
            target="_blank"
            className="md:text-[150%] text-highlight"
          >
            {props.title}
          </a>
          <p>{props.body}</p>
          {/* <div className="bg-gradient-to-t from-gray-900 absolute bottom-0 w-[100%] h-[30%]"></div> */}
        </div>
        {props.isMobile && (
          <button className="font-bold text-highlight pt-2 text-left">
            Learn More
          </button>
        )}
      </div>
      <img
        className="w-[600px] my-auto shadow-2xl h-[314px] shadow-black"
        src={props.image}
        alt=""
      />
    </div>
  );
}

export default function Experience() {
  const professionalExperience = [
    {
      title: "Community Ali - Full Stack Web Developer",
      body: `I worked as a full stack web developer for Community Ali, 
      a startup that aims to connect people with their local communities. 
      The tech stack I used while doing work for Communnity Ali was 
      React.js, tailwindcss, and Webpack for frontend, Node.js, Express.js, 
      Mongoose.js, AWS SNS, AWS SES, and MongoDB for backend, and Heroku for hosting. 
      
      My main responsibilities included: repository management, 
      webpack configuration, bug fixing and feature implementation, 
      and database management. With my hardest callenges being: 
      implementing the front end backend for a messaging system and inbox, 
      that allows services to send messages to users. Refactoring the frontend 
      of website to make use of react.js, webpack, and tailwindcss. 
      Refactoring the backend to use the MVC, Model, View, Controller 
      architecture pattern.
      
      I worked on this project from 2023-02-01 to current date.`,
      image: CommunityAliThumbnail,
      imageSide: "center",
      link: "https://www.communityali.org/",
    },
  ];
  const personalExperience = [
    {
      title: "Profilio Website",
      body: `I worked on this website as a way to showcase my skills and experience
    as a web developer. I used React.js, tailwindcss, and Webpack for frontend 
    and am using Github Pages for hosting. The most challenging part of this project
    was the implementing the carocell component, a component that allows you to scroll
    through all the technologies I have experience with.`,
      image: ProfilioThumbnail,
      link: "https://github.com/MasonPartridge",
    },
    {
      title: "Padser-SketchPad",
      body: `I worked on this project as a way to learn more about javascript, html, and css.
    I used html, css, and javascript for the frontend and am using Github Pages for hosting.`,
      image: PadserThumbnail,
      imageSide: "left",
      link: "https://masonpartridge.github.io/Padser-SketchPad/",
    },
  ];

  return (
    <div className="w-[100%] flex justify-center">
      <div
        className="lg:max-w-[80%] py-32 text-white flex flex-col
          items-center "
      >
        <div className="flex flex-col gap-16">
            <h1 className="text-[300%] font-bold text-center">
              Professional Experience
            </h1>
          <div id="professional-experience">
            {professionalExperience.map((experience) => {
              return (
                <ExperienceCard
                  key={experience.title}
                  image={experience.image}
                  title={experience.title}
                  body={experience.body}
                  imageSide={experience.imageSide}
                  link={experience.link}
                />
              );
            })}
          </div>
        </div>
        <div id="personal-experience" className="flex flex-col gap-16 pt-16">
          <h1 className="text-center text-[300%] font-bold">
            Personal Experience
          </h1>
          <div className="flex flex-col gap-16">
            {personalExperience.map((experience) => {
              return (
                <ExperienceCard
                  key={experience.title}
                  image={experience.image}
                  title={experience.title}
                  body={experience.body}
                  link={experience.link}
                  imageSide={experience.imageSide}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
