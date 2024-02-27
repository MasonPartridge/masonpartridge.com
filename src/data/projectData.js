import CommunityAliThumbnail from "@picture/CommunityAliThumbnail.png";
import ProfilioThumbnail from "@picture/ProfilioThumbnail.png";
import PadserThumbnail from "@picture/PadserThumbnail.png";
import ClubsiteThumbnail from "@picture/club-website.png";

const projectData = [
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
    images: [CommunityAliThumbnail, CommunityAliThumbnail, CommunityAliThumbnail],
    link: "https://www.communityali.org/",
  },
  {
    title: "MJC Club Application Website",
    body: `A website to handle club applications and renewal for MJC,
     I worked mainly on the form Frontend and some Backend, technical form Backend, 
     and some of the login and signup page Frontend.`,
    images: [ClubsiteThumbnail],
    imageSide: "center",
    link: "https://club-website-two.vercel.app/",
  },
  {
    title: "Profilio Website",
    body: `I worked on this website as a way to showcase my skills and experience
  as a web developer. I used React.js, tailwindcss, and Webpack for frontend 
  and am using Github Pages for hosting. The most challenging part of this project
  was the implementing the carocell component, a component that allows you to scroll
  through all the technologies I have experience with.`,
    images: [ProfilioThumbnail],
    link: "https://github.com/MasonPartridge",
  },
  {
    title: "Padser-SketchPad",
    body: `I worked on this project as a way to learn more about javascript, html, and css.
  I used html, css, and javascript for the frontend and am using Github Pages for hosting.`,
    images: [PadserThumbnail],
    imageSide: "left",
    link: "https://masonpartridge.github.io/Padser-SketchPad/",
  },
];

function getProjectData(projectId) {
  switch (projectId) {
    case "communityali":
      return projectData[0];
    case "club-website":
      return projectData[1];
    case "profilio":
      return projectData[2];
    case "padser-sketchpad":
      return projectData[3];
    default:
      return projectData[0];
  }
}



export default getProjectData;
