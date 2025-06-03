"use client";
import React from 'react';
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {TypewriterEffectSmooth} from "@/components/ui/typewrter-effect";

const testimonials = [
    {
        quote:
            ['● Led the development of an autonomous driving test case platform, which enhanced testing efficiency by 35% for the autonomous driving R&D team.',
             '● Developed the platform\'s front end and integrating the testing team\'s APIs to enable R&D teams to independently select test cases'],
        name: "Software Manager, Meituan Autonomous Driving Team, China",
        title: "Dec, 2022 - Jul, 2023",
    },
    {
        quote:
            ['● Developed a low-code AI model platform based on AIOS (operating system), leveraging React, React Flow, Redux and Tailwind.',
                '● Enabling users with minimal coding experience to build AI models through intuitive drag-and-drop AI operators.'],
        name: "Software Manager, 4Paradigm, China",
        title: "Jan, 2022 - Dec, 2022",
    },
    {
        quote:
            ['● Developed and maintained a full-stack maritime crime detection platform.',
                '● Developed MVP for the company, leveraging React.js, FastAPI and Mongodb.'],
        name: "Senior Fullstack Engineer, Clause Technology, Vancouver",
        title: "Mar, 2025 - now",
    }
];

const words = [{text: "Experience"}]

const ExperienceCard = () => {
    return (
        <div
            className="relative w-full mt-16 flex flex-col items-center"
            id="experience"
        >
            <TypewriterEffectSmooth words={words}/>
            <p className="text-neutral-500 text-sm w-1/2 mb-4 mt-8 dark:text-neutral-300">
                I have 5 years of professional experience as a project engineer and manager in China, including 2 years of experience in the AI industry. I am dedicated to developing enterprise-grade, high-performance applications by writing maintainable and high-quality code.
            </p>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
                className="mt-10"
            />
        </div>
    );
};

export default ExperienceCard;




