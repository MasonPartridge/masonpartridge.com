import React from 'react';

export default function Project(props) {
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