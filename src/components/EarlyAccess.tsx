"use client"

import React, { useState } from "react";

import classNames from "classnames";

// Ui Components
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

// Framer Motion
import { motion } from "framer-motion";

const heroMotion = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
};

const EarlyAcess: React.FC = () => {
    const [email, setEmail] = useState('');

    return (
        <motion.div
            variants={heroMotion}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center h-screen px-4">
            <div className="text-center space-y-6">
                <h2 className={classNames(
                    "max-w-xl mx-auto",
                    "text-4xl tracking-tight lg:text-5xl", 
                    "font-extrabold font-serif",
                    "text-center items-center", "pb-2",
                    "text-transparent bg-gradient-to-t bg-clip-text from-gray-1/70 to-white",
                    "selection:bg-gray-2 selection:text-black"
                )}>
                    Get Early Access
                </h2>

                <p className={classNames(
                    "font-serif font-medium",
                    "scroll-m-10", "max-w-sm mx-auto", "text-base",
                    "text-gray-3/75", "text-center justify-center",
                    "selection:bg-gray-2 selection:text-black"
                )}>
                    Help us shape Synthia, get a sneak peek at our beta by joining our Early Access program today!
                </p>

                <form 
                    className={classNames(
                        "max-w-ms w-2/3", 
                        "mx-auto"
                )}>
                    <div className="space-y-3">
                        <Input 
                            required
                            type="email" 
                            name="email" 
                            id="email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$"
                            placeholder="Enter email address" 
                            className={classNames(
                                "font-sans font-medium",
                                "border-1"
                        )} />

                        <Button 
                            type="submit"     
                            className={classNames(
                                "w-full", 
                                "font-sans font-semibold"
                        )}>
                            Get early access
                        </Button>
                    </div>
                </form>
            </div>
        </motion.div>
    )
};

export default EarlyAcess;



