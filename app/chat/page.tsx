import React from "react";

// Components
import Layout from "@components/layouts/Layout";
import Prompt from "@components/ui/Prompt";
import { Card } from "@components/ui/Card";

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
            <Prompt />
      </Layout>
    )
  };