import React from 'react';
import Hero from '../Hero/Hero';

const CollectionHero = () => {
    return (
        <div>
            <Hero
                subtitle='Collection'
                title='Night Sky'
                description={true}
                button={false}
                descriptionText='Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo'
            />
        </div>
    );
};

export default CollectionHero;