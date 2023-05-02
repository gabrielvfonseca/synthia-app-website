"use client";

import React from "react";

// Components
import Layout from "@components/layouts/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/Avatar";
import Button from "@components/ui/Button";
import { Switch } from "@components/ui/Switch";

// Framer Motion
import { motion } from "framer-motion";

export default function Page() {
    return (
        <Layout className="overflow-hidden">
            <section className="w-full flex flex-col items-center mt-20 justify-start overflow-y-hidden">
                <h2 className="gradient-heading text-3xl font-semibold">My Account</h2>
                <p className="text-black/90 dark:text-neutral-400/90 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className="p-2 w-fit md:w-1/2 px-4 py-2 flex flex-col justify-center rounded-lg bg-zinc-100 dark:bg-night/80 border border-solid border-black/20 dark:border-neutral-700/60">
                    <div className="flex items-center space-x-8">
                        <div className="block space-y-5">
                            <h3 className="text-xl font-medium">Gabriel</h3>
                            <span className="text-sm text-black/70 dark:text-neutral-600">jg.fonseca@outlook.pt</span>
                        </div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>

                    <hr className="border-t border-t-solid border-t-black/20 dark:border-t-neutral-700/60" />
                    
                    <div>
                        <h4>Settings</h4>
                        <div className="flex items-center space-x-2">
                            <Switch id="dark-mode" />
                            <label htmlFor="dark-mode">Airplane Mode</label>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <Button variant="danger">
                                Delete all my data
                            </Button>

                            <Button variant="danger">
                                Close my Account
                            </Button>                        
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
  };