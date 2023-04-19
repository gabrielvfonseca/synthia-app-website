"use client"

import React, { useState } from "react";

// Next
import Link from "next/link";

// Components
import { Segment } from "@components/ui/Segment";

// Icons
import { Icons } from "@components/icons/icons";

export type NavModel = 'system' | 'light' | 'dark';

export const modelTheme: Record<NavModel, any> = {
  system: <Icons.laptop className="h-4 w-4 text-black" />,
  light: <Icons.sun className="h-4 w-4 text-black" />,
  dark: <Icons.moon className="h-4 w-4 text-black" />,
};

export const Footer: React.FC = () => {
    const [theme, setTheme] = useState<NavModel>('system');
    const themeStates = [
      modelTheme['system'],
      modelTheme['light'],
      modelTheme['dark'],
    ];

    return (
      <footer className="mt-48 grid grid-cols-1 gap-8 border-t border-black border-opacity-10 px-6 pt-12 pb-20 sm:grid-cols-3 sm:py-12 sm:px-8">
        <div className='flex flex-row items-center justify-center md:justify-start text-center text-black/90'>
          <Icons.logoLarge className='w-28 h-8' />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 text-center text-sm text-neutral-600">
          <span className="md:w-auto">Built with ❤️ and ☕ by</span>
          <Link
            className="text-neutral-800 hover:text-orange duration-200 transition-colors"
            href="https://gabfon.me"
            target="_blank"
          >
            Gabriel
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 sm:justify-end">
          <Segment
            items={themeStates}
            selected={theme === 'light' ? 1 : theme === 'dark' ? 2 : 0}
            id="theme-toggle"
            onChange={(i) =>
              setTheme(i === 0 ? 'system' : i === 1 ? 'light' : 'dark')
            }
          />
        </div>
      </footer>
    )
}

