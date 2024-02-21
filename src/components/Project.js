import React from "react";
import projectData from "@data/projectData";
import { useParams, Link } from "react-router-dom";

const Project = ({ match }) => {
  let { projectId } = useParams();
  const { title, body, images, link } = projectData[0];
  return (
    <div className="font-tech text-text max-w-screen-lg flex flex-col gap-6">
      <div className="text-2xl flex justify-between">
        <div>
          <Link to="/" className="text-text">
            {"Home "}
          </Link>
          <span className="text-text">{"> "}</span>
          <Link to="/portfolio" className="text-white"></Link>
          {"Portfolio "} <span className="text-white">{"> "}</span>
          <Link to={`/portfolio/:${projectId}`} className="text-accent">
            {title}
          </Link>
        </div>
        <a href={link} target="blank">{"Open Project >"}</a>
      </div>
      <h1 className="text-6xl">{title}</h1>
      <hr />
      <div className="flex gap-4 overflow-scroll">
        {images.map((image, index) => (
          <img className="w-1/2" key={index} src={image} alt="" />
        ))}
      </div>
      <p>{body}</p>
    </div>
  );
};

export default Project;
