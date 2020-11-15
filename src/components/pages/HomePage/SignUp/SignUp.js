import React from 'react'
import HeroSection from '../../../HeroSection'
import Pricing from '../../../Pricing';
// import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Homepage/Data'

import { homeObjThree } from './Data'

function Services() {
    return (
        <>
            <Pricing/>
            <HeroSection {...homeObjThree}/>
        </>
    );
}

export default Services
