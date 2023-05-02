"use client"

import React, { useState, useEffect } from 'react';

/* Icons */
import { Icons } from '@components/icons/icons';

/* Styles */
import cn from "classnames";

/* Framer Motion */
import { motion, AnimatePresence } from "framer-motion";

const animation = {
  initial: {
    y: 150,
    x: 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.5,
    delay: 0.1,
  },
  exit: {
    y: 150,
    x: 0,
    opacity: 0,
  },
  whileFocus: {
    scale: 1.4,
  },
  whileTap: {
    scale: 0.9,
  },
};

export const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
};

export default function PushTop () {
    const [scrollPosition, setSrollPosition] = useState(0);
    const [showGoTop, setshowGoTop] = useState(false);
  
    useEffect(() => {
      const handleGoToTop = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
      
        if (scrollPosition > 450) {
          return setshowGoTop(true);
        } else if (scrollPosition < 450) {
          return setshowGoTop(false);
        }
      };
  
      window.addEventListener('scroll', handleGoToTop);
  
      window.history.scrollRestoration = 'manual'
    }, [scrollPosition]);

    return (
        <AnimatePresence>
            {
              showGoTop && <motion.button
                className={cn(
                    'fixed bottom-6 right-6 md:right-8 z-40',
                    'cursor-pointer text-center',
                    'p-2.5', 'text-white',
                    'bg-eerie hover:bg-night dark:hover:bg-neutral-800',
                    'border border-solid border-platinium border-opacity-40',
                    'rounded-full shadow-lg dark:shadow-xl shadow-orange/20',
                    'transition-colors ease-in-out delay-100'
                )}
                initial={animation.initial}
                animate={animation.animate}
                transition={animation.transition}
                exit={animation.exit}
                whileFocus={animation.whileFocus}
                whileTap={animation.whileTap}
                onClick={goToTop}
                >
                  <Icons.arrowUp className='w-6 h-6 text-white/80' />
              </motion.button>
            }
        </AnimatePresence>
    );
};
