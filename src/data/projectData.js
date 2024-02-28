import PadserThumbnail from "@picture/PadserThumbnail.png";
import PadserDrawing from "@picture/project/padser/drawing.png";

const CommuntiAliImagesImport = require.context('../../public/pictures/project/communityali', false, /\.(png|jpe?g|svg)$/);
const CommuntiAliImages = CommuntiAliImagesImport.keys().map(image => CommuntiAliImagesImport(image));

const ClubsiteImagesImport = require.context('../../public/pictures/project/mjc_club', false, /\.(png|jpe?g|svg)$/);
const ClubsiteImages = ClubsiteImagesImport.keys().map(image => ClubsiteImagesImport(image));

const ProfilioImagesImport = require.context('../../public/pictures/project/masonweb', false, /\.(png|jpe?g|svg)$/);
const ProfilioImages = ProfilioImagesImport.keys().map(image => ProfilioImagesImport(image));

const projectData = [
  {
    title: "Community Ali",
    body: `A website for MJC and the Modesto residents to find volunteer, internship, community events, and club opportunities. My main contributions are rewriting the website to use of React.js and tailwind, refactoring the Backend's folder structure, controller methods, and api calls, writing documentation, and setting up and managing the Community Ali repo on Github, building the front and Backend for the announcement and messaging system, and implementing the Backend for service sorting.`,
    images: CommuntiAliImages,
    link: "https://www.communityali.org/",
  },
  {
    title: "MJC Club Application Website",
    body: `A website to handle club applications and renewal for MJC, I worked mainly on the club submission form Frontend and Backend, did some of the login and signup page Frontend.`,
    images: ClubsiteImages,
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
    images: ProfilioImages,
    link: "https://github.com/MasonPartridge",
  },
  {
    title: "Padser-SketchPad",
    body: `I worked on this project as a way to learn more about javascript, html, and css.
  I used html, css, and javascript for the frontend and am using Github Pages for hosting.`,
    images: [PadserThumbnail, PadserDrawing],
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
