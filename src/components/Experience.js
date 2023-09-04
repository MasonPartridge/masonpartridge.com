import React from "react";

import CommunityAliThumbnail from "@picture/CommunityAliThumbnail.png";
import ProfilioThumbnail from "@picture/ProfilioThumbnail.png";

function ExperienceCard(props) {
  if (props.imageSide === "left") {
    return (
      <div className="flex gap-16 bg-slate-900 p-6 rounded-3xl">
        <img className="w-[600px] h-[314px]" src={props.image} alt="" />
        <div>
          <h1 className="text-[300%]">{props.title}</h1>
          <p>{props.body}</p>
          <button >Learn More</button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-16 bg-slate-900 p-6 rounded-3xl">
      <div>
        <h1 className="text-[300%]">{props.title}</h1>
        <p>{props.body}</p>
        <button>Learn More</button>
      </div>
      <img className="w-[600px] h-[314px]" src={props.image} alt="" />
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
      
      I worked on this project from 2023-02-01 to 2023-09-01.`,
      image: CommunityAliThumbnail,
      imageSide: "left",
    },
  ];
  const personalExperience = [
    {
      title: "Profilio Website",
      body: `I worked on this website as a way to showcase my skills and experience
    as a web developer. I used React.js, tailwindcss, and Webpack for frontend 
    and am using heroku for hosting. The most challenging part of this project
    was the carocell component, which is a component that allows you to scroll
    through all the technologies I have experience with.`,
      image: ProfilioThumbnail,
    },
  ];

  return (
    <div
      className="px-16 py-32 gap-16 text-white flex flex-col 
        items-center bg-slate-800"
    >
      <h1 className="text-center text-[300%] font-bold">
        Professional Experience
      </h1>
      <div>
        {professionalExperience.map((experience) => {
          return (
            <ExperienceCard
              key={experience.title}
              image={experience.image}
              title={experience.title}
              body={experience.body}
              imageSide={experience.imageSide}
            />
          );
        })}
      </div>
      <h1 className="text-center text-[300%] font-bold">Personal Experience</h1>
      <div>
        {personalExperience.map((experience) => {
          return (
            <ExperienceCard
              key={experience.title}
              image={experience.image}
              title={experience.title}
              body={experience.body}
            />
          );
        })}
      </div>
    </div>
  );
}
