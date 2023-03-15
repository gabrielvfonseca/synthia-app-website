"use client"

import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";

import classNames from "classnames";

const buttonVariants = cva(
  "active:scale-95 flex flex-nowrap items-center justify-center rounded-md text-sm font-medium focus:outline-none focus:ring-2 transition duration-250 focus:ring-orange focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-slate-100",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black hover:bg-white/90 shadow-md",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-orange hover:bg-orange/60",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
        toggle: "text-white",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
        square: "py-1 px-1 h-fit w-fit",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={classNames(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
