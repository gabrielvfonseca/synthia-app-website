"use client";

import React, { 
  useEffect, 
  useMemo, 
  useRef, 
  useState, 
  MouseEvent 
} from 'react';

// ClassNames
import cn from 'classnames';

// Lib
import Balancer from 'react-wrap-balancer';

/* Framer Motion */
import { 
    motion, 
    useMotionTemplate, 
    useMotionValue,  
} from "framer-motion";

const animation = {
    fadeIn: {
      initial: { 
        opacity: 0, 
        scale: 0.94,
      },
      animate: { 
          opacity: 1, 
          scale: 1,
      },
      transition: { 
          duration: 0.18,
      },
      exit: { 
          opacity: 0, 
          scale: 0.94,
      },
    },
    whileInView: {
      whileInView: {
        y: 0,
        opacity: 1,
      },
      initial: { 
          y: 8,
          opacity: 0
      },
      transition: {
        duration: 0.20,
        delay: 0.16
      }
    }
};
  

export const Card: React.FC<{
    title: string, children: React.ReactNode,
  }> = ({ title, children }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);
  
    function handleMouseMove({
      currentTarget,
      clientX,
      clientY,
    }: MouseEvent) {
      let { left, top } = currentTarget.getBoundingClientRect();
  
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
  
    return (
      <motion.div
        initial={animation.whileInView.initial}
        transition={animation.whileInView.transition}
        whileInView={animation.whileInView.whileInView}
        className={cn(
          "group relative w-full h-full rounded-lg",
          "border border-black/20 dark:border-neutral-700 dark:hover:border-orange/40", 
          "bg-neutral-50 dark:bg-matter",
          "bg-opacity-30 p-2 lg:max-w-sm",
          "shadow-md dark:shadow-lg",
          "transition-colors",
        )}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="pointer-events-none h-fit absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(238, 86, 34, 0.15),
                transparent 90%
              )
            `,
          }}
        />
        <div>
          <h3 className="text-lg font-bold tracking-tight text-black dark:text-white">
            {title}
          </h3>
          <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-400">
            <Balancer>
              {children}
            </Balancer>
          </p>
        </div>
      </motion.div>
    )
  }