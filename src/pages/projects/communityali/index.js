import React from 'react';
import Project from "@components/Project";
import projectData from '@data/projectData.js';

    export default function CommunityAliPage(props) {

        return (
            <div className="">
                <Project {...projectData[0]} />
            </div>
        )
    }