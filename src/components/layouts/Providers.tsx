"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from 'next-themes'

const Provider: React.FC<{
    children: ReactNode,
    attribute?: 'data' | 'class' | 'media'
}> = ({children, attribute}) => {
  return (
    <ThemeProvider attribute={attribute}>
      {children}
    </ThemeProvider>
  )
};

export default Provider;