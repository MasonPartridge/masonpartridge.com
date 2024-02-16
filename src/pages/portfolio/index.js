import React from 'react';
import NavigationBar from '@components/NavigationBar';
import PortfolioGallery from '@components/PortfolioGallery';

export default function Portfolio(){
    return (
        <div className='flex flex-col items-center h-screen'>
            <PortfolioGallery titlePrefix="" />
        </div>
    )
}