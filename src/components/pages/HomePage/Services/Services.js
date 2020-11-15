import React from 'react'
import HeroSection from '../../../HeroSection'
import Pricing from '../../../Pricing';
// import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Homepage/Data'

import { homeObjOne } from './Data'

function Services() {
    return (
        <>
            <Pricing/>
            <HeroSection {...homeObjOne}/>
        </>
    );
}

export default Services
