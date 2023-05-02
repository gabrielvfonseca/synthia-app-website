import React from "react";

// ClassNames
import cn from "classnames";

// Components
import SideBar from "@components/layouts/SideBar";
import { Pattern } from "@components/ui/Pattern";

export default function Layout({
    children, className
  }: {
  children: React.ReactNode;
  className?: string,
  }) {
    return (
      <main>
        <div className="relative flex h-full min-h-screen w-full">
          <div className="flex flex-1">
            <div className="flex w-full relative">
              <SideBar />
              <section className="relative w-full h-full flex-col bg-smoke dark:bg-black">
                <Pattern />
                <div className={cn("relative w-full h-full p-8", className)}>
                    {children}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    )
  };