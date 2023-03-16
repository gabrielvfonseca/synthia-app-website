"use client"

import React from "react";

import Link from "next/link";
import dynamic from 'next/dynamic';

import classNames from "classnames";

import { Icons } from "@icons/icons";

// Lib
import { isMobile } from "@utilities/isMobile";

// Components
const Desktop = dynamic(() => import('@components/Header/menu/desktop'));
const Mobile = dynamic(() => import('@components/Header/menu/mobile'));

// Framer Motion
import { motion } from "framer-motion";

const headerMotion = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        ease: 'easeInOut',
      }
    }
};

const Header: React.FC = () => {
    const isMobileDevice = isMobile();

    return (
        <motion.header 
            variants={headerMotion}
            initial="initial"
            animate="animate"
            className={classNames(
                "sticky top-0 z-40 w-full",
                "w-full h-fit", "py-4 px-10",
                "border border-solid border-gray-8",
                "backdrop-blur-2xl bg-black bg-opacity-40",
                "flex justify-between items-center",
        )}>
            <Link href="/" passHref>
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="z-50"
                >
                    <Icons.logo width={28} height={28} className="w-fit h-fit fill-current" />
                </motion.div>
            </Link>

        </motion.header>
    )
};

export default Header;