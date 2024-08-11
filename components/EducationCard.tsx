import React from 'react';
import {RevealCards} from "@/components/RevealCards";

const EducationCard = () => {
    return (
        <div
            className="relative w-full mt-12 flex flex-col items-center">
            <h1 className="text-4xl">Education</h1>
            <RevealCards/>
        </div>
    );
};

export default EducationCard;