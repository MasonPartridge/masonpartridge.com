import React from 'react';
import projectData from '@data/projectData';
import { useParams } from 'react-router-dom';

const Project = ({match}) => {
    let { projectId } = useParams();
    const { title, body, images, link } = projectData[0];
    return (
        <div className="">
            <h1>{title}</h1>
            <p>{body}</p>
            <a href={link}>Link</a>
            <hr />
            <div>
                {images.map((image, index) => (
                    <img key={index} src={image} alt="" />
                ))}
            </div>
        </div>
    )
}

export default Project;