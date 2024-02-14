import React from 'react';
import NavigationBar from '@components/NavigationBar';
import PortfolioGallery from '@components/PortfolioGallery';

export default function Portfolio(){
    return (
        <div>
            <NavigationBar />
            <PortfolioGallery titlePrefix="" />
        </div>
    )
}