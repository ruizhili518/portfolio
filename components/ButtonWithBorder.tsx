"use client";
import React from 'react';
import { Button } from "@/components/ui/moving-border";

const ButtonWithBorder = ({text}:{text : string}) => {
    return (
        <div>
            <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-600 text-black dark:text-white border-neutral-200 dark:border-slate-200"
            >
                {text}
            </Button>
        </div>
    );
};

export default ButtonWithBorder;