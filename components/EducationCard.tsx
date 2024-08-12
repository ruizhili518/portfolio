import React from 'react';
import {RevealCards} from "@/components/RevealCards";
import {TypewriterEffectSmooth} from "@/components/ui/typewrter-effect";

const EducationCard = () => {
    const words = [{text: "Education"}]
    return (
        <div
            className="relative w-full mt-12 flex flex-col items-center">
            <TypewriterEffectSmooth words={words}/>
            <RevealCards/>
        </div>
    );
};

export default EducationCard;