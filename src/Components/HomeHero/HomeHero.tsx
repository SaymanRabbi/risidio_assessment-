import React from 'react';
import Hero from '../Hero/Hero';

const HomeHero = () => {
    return (
        <div>
            <Hero 
            subtitle='Night sky collection'
            title='With the stars'
            description={false}
            button={true}
            />
        </div>
    );
};

export default HomeHero;