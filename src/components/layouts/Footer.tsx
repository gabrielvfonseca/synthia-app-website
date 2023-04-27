"use client"

import React, { useState } from "react";

// Next
import Link from "next/link";

// Components
import { Segment } from "@components/ui/Segment";

// ClassNames
import cn from "classnames";

// Icons
import { Icons } from "@components/icons/icons";

// Framer Motion
import { motion } from "framer-motion";

// Theme
import { useTheme } from '@lib/hooks/use-darkmode'; 

// Types
export type NavModel = 'system' | 'light' | 'dark';

export const modelTheme: Record<NavModel, any> = {
  system: <Icons.laptop className="h-4 w-4 text-black" />,
  light: <Icons.sun className="h-4 w-4 text-black" />,
  dark: <Icons.moon className="h-4 w-4 text-black" />,
};

export const Footer: React.FC = () => {
    const [theme, toggleTheme] = useTheme();

    return (
      <motion.footer 
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.4
        }}
        className={cn(
          "relative bottom-0 left-0",
          "px-6 pt-12 sm:py-12 sm:px-8",
          "border-solid border-t-white"
        )}
      >
        <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <Link href="https://flowbite.com/" className="flex items-center space-x-3">
                    <Icons.logo className="text-black dark:text-white" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Synthia</span>
                </Link>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase dark:text-neutral-200">Resources</h2>
                <ul className="text-black/90 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <Link href="https://flowbite.com/" className="hover:text-orange transition-colors">Flowbite</Link>
                    </li>
                    <li>
                        <Link href="https://tailwindcss.com/" className="hover:text-orange transition-colors">Tailwind CSS</Link>
                    </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase dark:text-neutral-200">Follow</h2>
                <ul className="text-black/90 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <Link href="https://github.com/themesberg/flowbite" className="hover:text-orange transition-colors ">Github</Link>
                    </li>
                    <li>
                        <Link href="https://discord.gg/4eeurUVvTy" className="hover:text-orange transition-colors">Discord</Link>
                    </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase dark:text-neutral-200">Legal</h2>
                <ul className="text-black/90 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:text-orange transition-colors">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-orange transition-colors">Terms &amp; Conditions</a>
                    </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-black/20 dark:border-neutral-700 sm:mx-auto lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-800 sm:text-center dark:text-gray-400">
              © 2023 <Link 
                href="/" 
                className="hover:text-orange transition-colors"
              >Synthia</Link>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <Link href="#" target="_blank" className="text-gray-500 dark:hover:text-white transition-colors">
                  <Icons.gitHub className="h-6 w-6" />
                </Link>
                <Link href="#" target="_blank" className="text-gray-500 dark:hover:text-white transition-colors">
                  <Icons.twitter className="h-6 w-6" />
                </Link>
            </div>
          </div>
        </div>
      </motion.footer>
    )
}

