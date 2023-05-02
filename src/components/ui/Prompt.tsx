"use client";

import { FC } from 'react';

// ClassNames
import cn from 'classnames';

// Types
type InputProps = {
  className?: string;
} & any;

// Framer Motion
import { motion } from "framer-motion";

const Input: FC<InputProps> = ({
  inputSize: s,
  variant,
  className,
  ...props
}) => {
  return (
    <motion.div className="absolute bottom-8 right-0 px-8 flex flex-col w-full">
        <input
            {...props}
            className={cn(
                className, "input-base", 
                "px-2 py-2 text-sm",
                "text-neutral-900 dark:text-neutral-200",
                "w-full bg-smoke dark:bg-black shadow-lg shadow-gray-500/10",
            )}
            placeholder="Send a message."
        />
    </motion.div>
  );
};

export default Input;
