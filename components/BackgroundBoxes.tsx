"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {Boxes} from "@/components/ui/background-boxes";
import {FlipWordsDemo} from "@/components/Flipwords";
import Image from "next/image";
import ButtonWithBorder from "@/components/ButtonWithBorder";

export function BackgroundBoxes() {
    return (
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex items-center justify-center rounded-lg mt-32 gap-20">
            <Boxes/>
            <div className={"w-full h-full flex items-center justify-center"}>
                <div className={"w-3/5 flex flex-col justify-start z-10 gap-12"}>
                    <FlipWordsDemo />
                    <ButtonWithBorder text={"Download Resume"}/>
                </div>
                <div className={"w-60 h-60 rounded-full flex justify-center items-center z-10"}>
                    <Image src="/Pic.jpg" alt="logo" width={800} height={800} className={"rounded-full"}/>
                </div>
            </div>
        </div>
    );
}
