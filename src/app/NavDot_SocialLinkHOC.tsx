import React, { useState } from 'react';
import Hero from './hero';
import { Link } from 'react-scroll';
import NavDots from './NavDots';

function NavDot_SocialLinkHOC({ innerComponent, navdots }: any) {
    // const [activePage, setActivePage] = useState(0);
    return (
        <div>
            {innerComponent}
            {navdots}
            {/* <Hero />
            <NavDots setActivePage={setActivePage} /> */}
        </div>
    );
};

export default NavDot_SocialLinkHOC;