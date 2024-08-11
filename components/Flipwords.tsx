import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
    const words = ["curiosity.","integrity.","precision.","insight.","reliability."];

    return (
        <div className="h-[10rem] flex flex-col justify-evenly gap-4">
            <div className="text-5xl font-normal text-neutral-600 dark:text-neutral-200">
                Welcome!
            </div>
            <div className="text-3xl font-normal text-neutral-600 dark:text-neutral-400">
                I'm Edward Li, a software engineer<br/>
                with<FlipWords words={words}/>
            </div>
        </div>
    );
}

//word={["passionate","innovative","detail-oriented","curious"]} sentence1={"Hi, I'm Edward Li, a "} sentence2={"software engineer."}