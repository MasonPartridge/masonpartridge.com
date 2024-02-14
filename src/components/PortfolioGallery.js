import React from 'react';
import Title from '@components/Title';

export default function PortfolioGallery(props){
    const {titlePrefix} = props;
	return (
		<div className="flex flex-row">
			<Title prefix={titlePrefix} title="Portfolio" />
            <div className="flex flex-row">
                <ProjectCard
                    title="Project 1"
                    body="This is a project"
                    images={["/images/1.jpg", "/images/2.jpg"]}
                    link="https://www.google.com"
                />
                <ProjectCard
                    title="Project 2"
                    body="This is a project"
                    images={["/images/1.jpg", "/images/2.jpg"]}
                    link="https://www.google.com"
                />
                <ProjectCard
                    title="Project 3"
                    body="This is a project"
                    images={["/images/1.jpg", "/images/2.jpg"]}
                    link="https://www.google.com"
                />
                </div>
		</div>
    )
}

export function ProjectCard(props) {
    const { title, body, images, link } = props;
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
