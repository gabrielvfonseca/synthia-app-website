"use client"

import React from "react";

import Link from "next/link";

import classNames from "classnames";

import { Icons } from "@icons/icons";

// Components
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@components/NavigationMenu";

const MenuDesktop: React.FC = () => {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                        <NavigationMenuContent className="w-full flex align-middle">
                                
                            <div className="p-1.5">
                                <Link
                                    href="/"
                                    className={classNames(
                                        "flex flex-col",
                                        "rounded-md", "p-4", "h-full w-full justify-end",
                                        "backdrop-blur-2xl bg-gray-6 bg-opacity-40 hover:bg-opacity-30",
                                        "outline-none shadow-lg", "transition-all duration-300"
                                )}>
                                    <div className="flex items-start space-x-1">
                                        <span className={classNames("mb-2", "text-sm font-semibold font-sans", "text-white")}>
                                            API
                                        </span>
                                        <Icons.arrowUpRight width={15} height={15} className="text-gray-4 opacity-80" />
                                    </div>
                                    <p className="text-sm font-medium font-serif leading-tight text-gray-4">
                                        Beautifully designed components
                                    </p>
                                </Link>
                            </div>

                            <div className="w-96">
                                <ul className="grid grid-cols-2 gap-1">
                                    <NavigationMenuComponent
                                        href="/"
                                        title="RoBERTa"
                                        icon={
                                            <Icons.cloud width={16} height={16} />
                                    }>
                                        Beautifully designed components
                                    </NavigationMenuComponent>

                                    <NavigationMenuComponent
                                        href="/"
                                        title="About"
                                        icon={
                                            <Icons.grid width={16} height={16} />
                                    }>
                                        Beautifully designed components
                                    </NavigationMenuComponent>

                                    <NavigationMenuComponent
                                        href="/"
                                        title="Early access"
                                        icon={
                                            <Icons.star width={16} height={16} />
                                    }>
                                        Beautifully designed components
                                    </NavigationMenuComponent>

                                    <NavigationMenuComponent
                                        href="/"
                                        title="Analytics"
                                        icon={
                                            <Icons.activity width={16} height={16} />
                                    }>
                                        Beautifully designed components
                                    </NavigationMenuComponent>
                                </ul>
                            </div>

                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/blog">
                            Blog
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/changelog">
                            Changelog
                        </Link>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
    
            <div className="menu-social">
                <div className="flex space-x-3 items-center">
                    <Link href="https://github.com" passHref>
                        <Icons.gitHub width={22} height={22} className="w-fit h-fit fill-current cursor-pointer hover:opacity-80 transition duration-300" />
                    </Link>
                    <Link href="https://twitter.com" passHref>
                        <Icons.twitter width={22} height={22} className="w-fit h-fit fill-current cursor-pointer hover:opacity-80 transition duration-300" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MenuDesktop;


const NavigationMenuComponent: React.FC<{
    href: string, icon: React.FC | any, title: string, children: React.ReactNode
}> = ({href, icon, title, children}) => (
    <li className="p-1.5 w-fit">
        <Link
            href={href}
            className={classNames(
                "flex flex-col", "h-full w-full justify-end", 
                "rounded-md", "p-4",
                "hover:backdrop-blur-2xl hover:bg-gray-6 hover:bg-opacity-40",
                "outline-none hover:shadow-lg",
                "duration-300"
        )}>
            <span className={classNames(
                "text-sm font-semibold font-sans", 
                "text-white", "items-center",
                "flex space-x-2",
            )}>
                {icon}
                <span>{title}</span>
            </span>
            <p className="text-sm font-medium font-serif leading-tight text-gray-4">
                {children}
            </p>
        </Link>
    </li>
);