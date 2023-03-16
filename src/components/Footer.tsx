"use client"

import React from "react";

import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";

import { Icons } from "@icons/icons";

// Components
import ThemeSelector from "@components/ThemeSelector";

// Framer Motion
import { motion } from "framer-motion";

const footerMotion = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        ease: 'easeInOut',
      }
    }
};

const Footer: React.FC = () => {
    return (
        <motion.footer 
            variants={footerMotion}
            initial="initial"
            animate="animate"
            className={classNames(
                "absolute z-40 w-full",
                "w-full h-fit", "py-4 px-10",
                "border border-solid border-gray-8",
        )}>

            <nav className="grid grid-cols-1 gap-4 md:grid-cols-3 pt-10 space-y-6">
                <div className="text-white fill-white">
                    <Image
                        src="assets/logo.svg" 
                        width={100}
                        height={30}
                        priority
                        alt="logo"
                        style={{
                            pointerEvents: "none",
                        }}
                    />
                </div>

                <Column title="Company">
                    <ColumnLink href="/">Home</ColumnLink>
                    <ColumnLink href="/blog">Blog</ColumnLink>
                    <ColumnLink href="/changelog">Changelog</ColumnLink>
                    <ColumnLink href="/">Early Access</ColumnLink>
                </Column>

                <Column title="Legal">
                    <ColumnLink href="/privacy">Privacy Policy</ColumnLink>
                    <ColumnLink href="/terms">Terms of Service</ColumnLink>
                    <ColumnLink href="/cookies">Cookie Preferences</ColumnLink>
                </Column>
            </nav>

            <div className={classNames(
                    "w-full", 
                    "flex flex-col md:flex-row justify-between items-center", 
                    "pb-6 pt-10"
            )}>
                <p className="font-sans font-medium text-xs text-gray-6">Copyright &copy; 2023 Synthia. All rights reserved.</p>

                <div className="flex space-x-4">
                    <Link 
                        href="https://github.com" 
                        target="_blank" 
                        passHref
                    >
                        <Icons.gitHub width={22} height={22} className="w-fit h-fit fill-current cursor-pointer hover:opacity-80 transition duration-300" />
                    </Link>

                    <span className="border-l border-l-solid border-l-gray-6" />
                    
                    <Link 
                        href="https://twitter.com" 
                        target="_blank" 
                        passHref
                    >
                        <Icons.twitter width={22} height={22} className="w-fit h-fit fill-current cursor-pointer hover:opacity-80 transition duration-300" />
                    </Link>
                </div>

                <SystemStatus />
            </div>
        </motion.footer>
    )
};

export default Footer;


const Column: React.FC<{children: React.ReactNode, title: string}> = ({
    children, title
}) => (
    <div className="space-y-2 pb-4">
        <h4 className="font-serif font-semibold text-sm tracking-wide">{title}</h4>
        {children}
    </div>
);

const ColumnLink: React.FC<{children: React.ReactNode, href: string}> = ({
    children, href
}) => (
    <Link 
        passHref
        href={href}
        className={classNames(
            "block", 
            "text-gray-3/75 hover:text-gray-1",
            "transition-colors duration-200"
    )}>
        {children}
    </Link>
);

const SystemStatus: React.FC = () => (
    <div className={classNames(
        "flex", "space-x-3 px-3 py-1", "items-center justify-center",
        "rounded-lg border border-solid border-gray-6"
    )}>
        <span className="font-sans font-medium text-xs text-gray-2">Status: All systems normal.</span>
    </div>
);