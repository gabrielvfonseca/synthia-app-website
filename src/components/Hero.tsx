"use client"

import React from "react";

import Link from "next/link";

import classNames from "classnames";

// Ui Components
import { Button } from "../ui/Button";

// Framer Motion
import { motion } from "framer-motion";

const badgeMotion = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.4,
      }
    },
    whileHover: {
        scale: 1.2,
        transition: { duration: 0.3 },
    },
    whileTap: { scale: 0.9 }
};

const heroMotion = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
};


const Hero: React.FC = () => {
    return (
        <motion.div
            variants={heroMotion}
            initial="initial"
            animate="animate"
            className={classNames("flex items-center justify-center h-screen px-4"
        )}>
            <div className="text-center space-y-7">
                <Badge>
                    Currently under development on GitHub
                </Badge>


                <h1 className={classNames(
                    "max-w-2xl mx-auto",
                    "text-5xl tracking-tight lg:text-6xl", 
                    "font-extrabold font-serif",
                    "text-center items-center", "pb-3",
                    "text-transparent bg-gradient-to-t bg-clip-text from-gray-1/70 to-white",
                    "selection:bg-gray-2 selection:text-black"
                )}>
                    Unleash the power of syntax AI - millions of answers at your fingertips!
                </h1>

                <p className={classNames(
                    "font-serif font-medium",
                    "scroll-m-10", "max-w-sm mx-auto", "text-base",
                    "text-gray-3/75", "text-center justify-center",
                    "selection:bg-gray-2 selection:text-black"
                )}>
                    Synthia can help you with anything from finding information to completing tasks, all through a simple chat interface
                </p>

                <Button type="submit" className={classNames(
                    "font-sans font-semibold", "relative mx-auto",
                    "text-center items-center text-lg text-black/90", "py-3.5 px-8", 
                    "before:absolute before:w-full before:h-full before:-z-10", 
                    "before:bg-gradient-to-r before:from-orange before:via-violet-light before:to-blue-default",
                    "before:left-0 before:top-0 before:blur-[18px]",
                    "border-3 border-solid border-gray-3",
                    "bg-opacity-80 border-opacity-80 hover:border-opacity-60",
                )}>
                    Request access
                </Button>
            </div>
        </motion.div>
    )
};

export default Hero;


const Badge: React.FC<{children: React.ReactNode}> = ({children}) => (
    <motion.div 
        variants={badgeMotion}
        initial="initial"
        animate="animate"
        className={classNames(
            "w-fit h-fit mx-auto", "rounded-full",
            "bg-gradient-to-r p-[1px] from-orange via-violet-light to-blue-default",
    )}>
        <Link href="/" target="_blank" passHref>
            <div className="flex flex-col justify-between h-full bg-background text-white rounded-3xl py-1 px-2">
                <p className={classNames(
                    "font-serif text-xs font-medium text-center mx-auto",
                    "text-transparent bg-gradient-to-r bg-clip-text from-orange via-violet-light to-blue-default",
                    "selection:bg-gray-2 selection:text-black",
                )}>
                    {children}
                </p>
            </div>
        </Link>
    </motion.div>
);
