"use client";
import React from 'react';
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {TypewriterEffectSmooth} from "@/components/ui/typewrter-effect";

const testimonials = [
    {
        quote:
            ['● Established and optimized the R&D process for the autonomous driving team.',
             '● Managed the development of more than 10 new versions of autonomous driving software.'],
        name: "AI Project Manager, Meituan, China",
        title: "Dec, 2022 - Jul, 2023",
    },
    {
        quote:
            ['● Managed project delivery of the B2B AI platform product.',
                '● Created and delivered solutions for clients based on their needs leveraging the AI platform.'],
        name: "AI Project Manager, 4Paradigm, China",
        title: "Jan, 2022 - Dec, 2022",
    },
    {
        quote:
            ['● Provided professional solutions for the design of dock construction projects.',
                '● Explored the application of new technologies in construction project.'],
        name: "Project Engineer & Manager, Tianjin Lingang Port Group, China",
        title: "Jul, 2017 - Jan, 2022",
    }
];

const words = [{text: "Experience"}]

const ExperienceCard = () => {
    return (
        <div
            className="relative w-full mt-16 flex flex-col items-center">
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




