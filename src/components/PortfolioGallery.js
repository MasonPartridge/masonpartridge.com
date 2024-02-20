import React from "react";
import Title from "@components/Title";

import CommunityAliThumbnail from "@picture/CommunityAliThumbnail.png";
import ProfilioThumbnail from "@picture/ProfilioThumbnail.png";
import PadserThumbnail from "@picture/PadserThumbnail.png";
import ClubsiteThumbnail from "@picture/club-website.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const projects = [
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
    <div className="flex pt-8 text-text font-tech flex-col gap-4 max-w-screen-lg items-center">
      <Title prefix={titlePrefix} title="Portfolio" />
      <div className="flex flex-row gap-4">
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
    <div className="rounded-lg">
      <img src={image} alt="" />
      <Link to={`/portfolio/${portfolioLink}`} className="text-white">{title}</Link>
      <a className="font-bold" href={link}>Link</a>
      <hr />
    </div>
  );
}
