import React from "react";
import Title from "@components/Title";

import CommunityAliThumbnail from "@picture/CommunityAliThumbnail.png";
import ProfilioThumbnail from "@picture/ProfilioThumbnail.png";
import PadserThumbnail from "@picture/PadserThumbnail.png";
import ClubsiteThumbnail from "@picture/club-website.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const projects = [
  {
    title: "Community Ali",
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
    link: "https://www.communityali.org/",
    portfolioLink: "communityali",
  },
  {
    title: "MJC Club Application Website",
    body: `A website to handle club applications and renewal for MJC,
       I worked mainly on the form Frontend and some Backend, technical form Backend, 
       and some of the login and signup page Frontend.`,
    image: ClubsiteThumbnail,
    link: "https://club-website-two.vercel.app/",
    portfolioLink: "club-website",
  },
  {
    title: "Profilio Website",
    body: `I worked on this website as a way to showcase my skills and experience
    as a web developer. I used React.js, tailwindcss, and Webpack for frontend 
    and am using Github Pages for hosting. The most challenging part of this project
    was the implementing the carocell component, a component that allows you to scroll
    through all the technologies I have experience with.`,
    image: ProfilioThumbnail,
    link: "https://github.com/MasonPartridge",
    portfolioLink: "profilio",
  },
  {
    title: "Padser-SketchPad",
    body: `I worked on this project as a way to learn more about javascript, html, and css.
    I used html, css, and javascript for the frontend and am using Github Pages for hosting.`,
    image: PadserThumbnail,
    link: "https://masonpartridge.github.io/Padser-SketchPad/",
    portfolioLink: "padser-sketchpad",
  },
];

export default function PortfolioGallery(props) {
  const { titlePrefix } = props;
  return (
    <div className="flex pt-8 text-text w-full font-tech flex-col gap-16 items-center">
      <Title prefix={titlePrefix} title="Portfolio" />
      <div className="flex flex-row gap-4 flex-wrap justify-between w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export function ProjectCard(props) {
  const { title, body, image, link, portfolioLink } = props;
  return (
    <div className="overflow-clip w-80 max-w-[373px] flex-grow bg-secondary">
      <div className="h-[75%] overflow-clip">
        <Link to={`/portfolio/:${portfolioLink}`}>
          <img src={image} className="h-full w-full hover:h-[125%] hover:w-[125%] duration-500 transition-all ease-in-out object-cover" alt="" />
        </Link>
      </div>
      <div className="p-4 flex flex-col">
        <Link
          to={`/portfolio/:${portfolioLink}`}
          className="text-white hover:font-bold"
        >
          <h1 className="text-lg">{title}</h1>
        </Link>
        <a className="hover:font-bold" href={link}>
          {"Website Link >"}
        </a>
      </div>
    </div>
  );
}
