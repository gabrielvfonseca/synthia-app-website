"use client"

import * as React from "react";

import classNames from "classnames";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={classNames(
          "flex h-10 w-full rounded-md border border-gray-8 bg-transparent py-2 px-3 text-sm placeholder:text-gray-3/60 focus:border-gray-6 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
);
Input.displayName = "Input";

export { Input };
