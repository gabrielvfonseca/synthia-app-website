"use client"
 
import React, { useState } from "react";
 
import classNames from "classnames";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";
 
export default function ThemeSelector() {
    const [theme, setTheme] = useState(false);

    return (
        <Select>
            <SelectTrigger className={classNames(
                "w-4 block"
            )}>
                <SelectValue placeholder="System" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectItem value="apple">System</SelectItem>
                <SelectItem value="banana">Dark</SelectItem>
                <SelectItem value="blueberry">White</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};