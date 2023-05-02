"use client";

import React from "react";

// Components
import Layout from "@components/layouts/Layout";
import Input from "@components/ui/Input";
import { Card } from "@components/ui/Card";

// Framer Motion
import { motion } from "framer-motion";

export const InputPrompt: React.FC = () => (
    <motion.div className="absolute bottom-8 right-0 px-8 flex flex-col w-full">
        <Input className="w-full bg-smoke dark:bg-black shadow-lg shadow-gray-500/10" placeholder="Send a message." />
    </motion.div>
)

export default function Page() {
    return (
      <Layout className="overflow-hidden">
            <section className="w-full flex items-center mt-20 justify-center overflow-y-hidden">
                <div className="text-center">
                    <h1 className="gradient-heading text-3xl font-semibold">Synthia</h1>
                    <p className="text-black/90 dark:text-neutral-400/90 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quod corrupti sed quo hic officiis.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <Card title="Lorem Ipsum">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </Card>
                        <Card title="Lorem Ipsum">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </Card>
                        <Card title="Lorem Ipsum">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </Card>
                        <Card title="Lorem Ipsum">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </Card>
                    </div>
                </div>
            </section>
            <InputPrompt />
      </Layout>
    )
  };