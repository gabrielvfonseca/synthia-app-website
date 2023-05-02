"use client";

import React, { useState } from "react";

// Next
import Link from "next/link";

// ClassNames
import cn from "classnames";

// Components

// Icons
import { Icons } from "@components/icons/icons";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

const Sidebar: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <motion.button
                onClick={() => setOpen(!isOpen)}
                className={cn(
                    "absolute top-4 left-5 z-20",
                    "p-2 bg-zinc-200 dark:bg-matter text-black dark:text-white",
                    "border border-solid border-transparent hover:border-orange active:border-cinnabar",
                    "rounded-lg lg:hidden",
                    "transition-colors duration-200"
                )}
            >
                <motion.div animate={{rotate: !open ? 180 : 0}}>
                    <Icons.menu className='h-5 w-5' />
                </motion.div>
            </motion.button>
            <motion.nav 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{
                    duration: 0.24,
                    delay: 0.8,
                }}
                className={cn(
                    "absolute lg:relative lg:z-auto z-30 h-full max-h-screen min-h-screen",
                    "3xl:w-80 w-3/4 sm:w-1/2 md:w-1/3 lg:w-56", "pb-10 sm:pb-0",
                    "flex flex-none flex-col", "transform overflow-y-auto transition duration-200 ease-in-out", 
                    "lg:translate-x-0", !isOpen ? '-translate-x-full' : '',
                    "border-r border-r-solid border-r-black/20 dark:border-r-neutral-700/60",
                    "bg-slate-50 dark:bg-matter 2xl:w-72"
                )}
            >
                <div className="flex-1 px-3 py-3 space-y-4">
                    <div className="flex items-center gap-3 lg:hidden">
                        <button 
                            onClick={() => setOpen(!isOpen)}
                            className={cn(
                                "p-2 bg-zinc-200 dark:bg-matter text-black dark:text-white",
                                "hover:bg-zinc-300 dark:hover:bg-eerie",
                                "rounded-lg",
                                "transition-colors duration-200"
                            )}
                        >
                            <motion.div 
                                animate={{rotate: !open ? 180 : 0}}
                                className=""
                            >
                                <Icons.menu className='h-5 w-5' />
                            </motion.div>
                        </button>
                        <h4 className="text-sm font-medium">Synthia</h4>
                    </div>

                    <button className={cn(
                        "flex w-full items-center", 
                        "space-x-2 py-2 px-4",
                        "text-black dark:text-white", 
                        "bg-zinc-200 dark:bg-neutral-900 hover:bg-orange/20",
                        "border border-solid border-transparent hover:border-orange active:border-cinnabar",
                        "transition-colors duration-200",
                        "font-normal text-sm",
                        "rounded-md shadow",
                    )}>
                        <Icons.plus />
                        <span>New chat</span>
                    </button>
                    
                    <hr className="px-3 border-t border-t-solid border-t-black/20 dark:border-t-neutral-700/60" />
                    
                    <motion.ul 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{
                            duration: 0.5,
                            delay: 0.8,
                        }}
                        className="space-y-1"
                    >
                        {
                            [
                                { 
                                    label: 'hello', 
                                    href: '/'
                                }
                            ]
                            .map((item: {
                                label: string, 
                                href: string
                            }, index: number) => (
                                <motion.li
                                    key={index}
                                    whileInView={{
                                        opacity: 1,
                                    }}
                                    initial={{ 
                                        opacity: 0
                                    }}
                                    transition={{
                                        duration: 0.18,
                                        delay: index/8+1,
                                    }}
                                    className={cn(
                                        "flex flex-col w-full",
                                        " items-start text-left", 
                                        "py-2 px-4", "text-sm font-medium",
                                        "text-black dark:text-white hover:text-opacity-70", 
                                        "bg-zinc-200 dark:bg-neutral-900 hover:bg-orange/30",
                                        "border border-solid border-transparent hover:border-orange",
                                        "transition-colors duration-200",
                                        "font-normal text-sm cursor-pointer",
                                        "rounded-md shadow",
                                )}>
                                    <Link href={item.href}>
                                        {item.label}
                                    </Link>
                                </motion.li>
                            )
                        )}
                    </motion.ul>

                </div>
                <div className="sticky bottom-0 z-10 p-2 space-y-2 filter-blur border-t border-t-solid border-t-black/20 dark:border-t-neutral-700/60">
                    <Link href="/account">
                        <button className={cn(
                            "flex w-full items-center", 
                            "space-x-2 py-2 px-4",
                            "text-black dark:text-white", 
                            "bg-transparent dark:hover:bg-neutral-900",
                            "font-normal text-sm",
                            "rounded-md shadow",
                        )}>
                            <Icons.user />
                            <span>My Account</span>
                        </button>
                    </Link>
                    <button className={cn(
                        "flex w-full items-center", 
                        "space-x-2 py-2 px-4",
                        "text-black dark:text-white", 
                        "bg-transparent dark:hover:bg-neutral-900",
                        "font-normal text-sm",
                        "rounded-md shadow",
                    )}>
                        <Icons.exit />
                        <span>Log Out</span>
                    </button>
                </div>
            </motion.nav>
        </>
    )
};

export default Sidebar;