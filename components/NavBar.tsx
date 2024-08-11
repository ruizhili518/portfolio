"use client"
import React from 'react';
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image";
import {cn} from "@/lib/utils";

const NavBar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <Image src="/logo.png" width={60} height={60} alt="logo" className={"mr-16"} />
                <div className={"flex"}>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xl`}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xl`}>
                            Education
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xl`}>
                            Project
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xl`}>
                            Skill
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className={"justify-self-end"}>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-xl`}>
                            Contact Me
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    );
};
export default NavBar;