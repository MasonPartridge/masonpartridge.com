import React from 'react';
import Project from "@component/Project";
import projectData from '@data/projectData';

    export default function CommunityAliPage(props) {

        return (
            <div className="">
                <Project {...projectData[0]} />
            </div>
        )
    }