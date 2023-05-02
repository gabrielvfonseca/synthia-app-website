"use client";

import React, { useState } from "react";

// Next
import Link from "next/link";

// Icons
import { Icons } from "@components/icons/icons";
import { Pattern } from "@components/ui/Pattern";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

export default function Page (): JSX.Element {
    const [step, setStep] = useState(false);

    return (
        <section className="relative h-screen flex items-center justify-center">
            <Pattern />
            <div className="mx-auto z-50 flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <Icons.logo className="h-7 w-7 text-center" />
                    <h1 className="gradient-heading text-2xl font-semibold tracking-tight">
                        Login to you account
                    </h1>
                    <p className="text-black/90 dark:text-neutral-300 font-normal mb-5">
                        Enter your invitation email to login to your account
                    </p>
                </div>
                <div>
                    <AnimatePresence>
                        {!step ?
                            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1, delay: 0.3}} className="space-y-4">
                                <Input placeholder="timcook@apple.com" className="w-full shadow-md shadow-gray-500/10 text-neutral-900 dark:text-neutral-200 bg-neutral-200 dark:bg-night" />
                                <Button variant="cta" className="w-full" onClick={() => setStep(true)}>
                                    Continue
                                </Button>
                            </motion.div> :
                            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1, delay: 0.3}} className="space-y-4">
                                <Input placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" className="w-full shadow-md shadow-gray-500/10 text-neutral-900 dark:text-neutral-200 bg-neutral-200 dark:bg-night" />
                                <Button variant="cta" className="w-full">
                                    Login
                                </Button>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
                <p className="px-8 text-center text-sm text-black/90 dark:text-neutral-600">
                    By clicking continue, you agree to our <Link className="underline decoration-dotted underline-offset-4 hover:text-orange duration-200 transition-colors" href="/terms">Terms of Service</Link> and <Link className="underline decoration-dotted underline-offset-4 hover:text-orange duration-200 transition-colors" href="/privacy">Privacy Policy</Link>.
                </p>
            </div>
        </section>
    )
}