import React from 'react';
import MeImage from '@picture/Me.png';

export default function LandingPage() {
    return (
        <div className='flex h-[15vh]'>
            <img src={MeImage} alt="logo" />
            <h1>Hello</h1>
        </div>
    );
}