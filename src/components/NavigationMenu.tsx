"use client"

import React from "react";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cva } from "class-variance-authority";

import { ChevronDown } from "lucide-react";

import classNames from "classnames";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={classNames(
      "relative z-10 flex flex-1", 
      "items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={classNames(
      "group flex flex-1 list-none",
      "items-center justify-center",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(classNames(
  "inline-flex", "items-center justify-center", "text-sm font-medium tracking-wide gap-1.5", "text-gray-2/75",
  "bg-transparent hover:text-white data-[state=open]:bg-gray-8 data-[active]:bg-gray-8 dark:data-[active]:bg-gray-8 focus:bg-black dark:focus:bg-black",
  "focus:outline-none disabled:opacity-50 disabled:pointer-events-none hover:text-gray-2",
  "h-fit py-1 px-3.5 group w-max", "rounded-full",
  "transition duration-250",
  )
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={classNames(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className={classNames(
        "relative top-[1px] h-3 w-3", 
        "transition duration-200 group-data-[state=open]:rotate-180"
      )}
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={classNames(
      "top-0 right-0 w-full",
      "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=to-start]:slide-out-to-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-end]:slide-in-from-right-52",
      "md:absolute md:w-auto",
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={classNames("absolute top-full", "flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={classNames(
        "origin-top-center relative", 
        "mt-1.5 h-[var(--radix-navigation-menu-viewport-height)]", 
        "overflow-hidden rounded-lg",
        "border border-gray-7 shadow-xl",
        "backdrop-blur-xl bg-black bg-opacity-40 fixed inset-0",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-90 data-[state=closed]:zoom-out-95",
        "md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={classNames(
      "top-full z-[1] flex h-1.5", 
      "items-end justify-center",
      "overflow-hidden",
      "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=visible]:fade-in data-[state=hidden]:fade-out",
      className
    )}
    {...props}
  >
    <div className={classNames(
      "relative top-[60%] h-2 w-2", 
      "rotate-45 rounded-tl-sm", 
      "bg-slate-200 dark:bg-slate-800", 
      "shadow-md"
    )} />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
