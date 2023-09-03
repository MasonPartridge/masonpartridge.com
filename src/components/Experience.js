import React from "react";

import CommunityAliThumbnail from "@picture/CommunityAliThumbnail.png";

function ExperienceCard(props) {
  return (
    <div className="flex gap-16">
      <img className="w-[600px]" src={props.image} alt="" />
      <div>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <button>Learn More</button>
      </div>
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
    },
  ];
  const personalExperience = [];

  return (
    <div className="px-16 py-32 gap-32 text-white h-[75vh] flex flex-col 
        items-center bg-slate-800">
      <h1 className="text-center text-[300%] font-bold">Professional Experience</h1>
      <div>
        {professionalExperience.map((experience) => {
          return (
            <ExperienceCard
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
