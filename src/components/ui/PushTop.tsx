"use client"

import React, { useState, useEffect } from 'react';

/* Icons */
import { Icons } from '@components/icons/icons';

/* Styles */
import cn from "classnames";

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
        <>
            {
                showGoTop && <button
                className={cn(
                    'fixed bottom-6 right-10 z-40',
                    'cursor-pointer text-center',
                    'p-2.5', 'text-white',
                    'bg-eerie hover:bg-night',
                    'border border-solid border-platinium border-opacity-40',
                    'rounded-full shadow-lg',
                    'transition-colors ease-in-out delay-100'
                )}
                onClick={goToTop}
                >
                    <Icons.arrowUp className='w-6 h-6 text-white/80' />
                </button>
            }
        </>
    );
};
