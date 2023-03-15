"use client"

import React, { useEffect } from "react";

import Link from "next/link";

import classNames from "classnames";

import { Icons } from "@icons/icons";

// Ui Components
import { Button } from "../ui/Button";

// Components
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@components/NavigationMenu";
import { navigationMenuTriggerStyle } from "@components/NavigationMenu";

// Framer Motion
import { AnimatePresence, motion, useCycle } from "framer-motion";

const itemVariants = {
    closed: {
        opacity: 0
    },
    open: { 
        opacity: 1,
    }
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: 1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: 1
    }
  }
};

const headerMotion = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        ease: 'easeInOut',
      }
    }
};

const Header: React.FC = () => {
    const [open, cycleOpen] = useCycle(false, true);

    
    const handleDocumentClick = (event) => {
        if (!event.target.closest('.sidebar-menu') && open) {
            cycleOpen();
        }
    };

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', open);
    
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
            document.body.classList.remove('overflow-hidden');
        };
    }, [open]);

    return (
        <motion.header 
            variants={headerMotion}
            initial="initial"
            animate="animate"
            className={classNames(
                "sticky top-0 z-40 w-full",
                "w-full h-fit", "py-4 px-10",
                "border border-solid border-gray-8",
                open ? 'bg-background' : "backdrop-blur-xl bg-black bg-opacity-40",
                "flex justify-between items-center",
        )}>
            <Link href="/" passHref>
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="z-50"
                >
                    <Icons.logo width={28} height={28} className="w-fit h-fit fill-current" />
                </motion.div>
            </Link>

        <>
            <AnimatePresence>
                {open && (
                    <motion.aside
                        initial={{ width: 0 }}
                        animate={{ top: 10, width: "100%", height: "100%" }}
                        exit={{
                            width: 0,
                            transition: { delay: 0.5, duration: 0.3 }
                        }}
                        className="fixed top-0 left-0 w-full h-full z-50"
                    >
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sideVariants}
                            className={classNames(
                                "space-y-4",
                                "mt-14 px-8 py-14", 
                                "bg-background",
                        )}>
                            <MobileMenuComponent href="/">
                                Developer
                            </MobileMenuComponent>

                            <MobileMenuComponent href="/">
                                Blog
                            </MobileMenuComponent>

                            <MobileMenuComponent href="/">
                                Changelog
                            </MobileMenuComponent>

                            <MobileMenuComponent href="/">
                                GitHub
                            </MobileMenuComponent>

                            <MobileMenuComponent href="/">
                                Twitter
                            </MobileMenuComponent>
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>
            <Button 
                variant="toggle" 
                size="square" 
                onClick={() => cycleOpen}
                className={classNames(
                    "p-1", "z-50", "aside-button",
                    "bg-transparent hover:bg-gray-8", 
                    "focus:outline-none",
            )}>
                <AnimatePresence initial={false}>
                    {!open ? <motion.div animate={{rotate: !open ? 180 : 0}}>
                        <Icons.menu width={28} height={28} className="text-white" />
                    </motion.div> : <motion.div animate={{rotate: !open ? 360 : 0}}>
                        <Icons.close width={28} height={28} className="text-white" />
                    </motion.div>}
                </AnimatePresence>
            </Button> 
        </>
                <FlexNavigationMenu />

        </motion.header>
    )
};

export default Header;



const FlexNavigationMenu: React.FC = () => (
    <>
        <div className="menu-nav">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                        <NavigationMenuContent className="w-full flex align-middle">
                                
                            <div className="p-1.5">
                                <Link
                                    href="/"
                                    className={classNames(
                                        "flex flex-col",
                                        "rounded-md", "p-4", "h-full w-full justify-end",
                                        "backdrop-blur-2xl bg-gray-6 bg-opacity-40 hover:bg-opacity-30",
                                        "outline-none shadow-lg", "transition-all duration-300"
                                )}>
                                    <div className="flex items-start space-x-1">
                                        <span className={classNames("mb-2", "text-sm font-semibold font-sans", "text-white")}>
                                            API
                                        </span>
                                        <Icons.arrowUpRight width={15} height={15} className="text-gray-4 opacity-80" />
                                    </div>
                                    <p className="text-sm font-medium font-serif leading-tight text-gray-4">
                                        Beautifully designed components
                                    </p>
                                </Link>
                            </div>

                            <div className="w-96">
                                <ul className="grid grid-cols-2 gap-1">
                                    <NavigationMenuComponent
                                        href="/"
                                        title="RoBERTa"
                                        icon={
                                            <Icons.cloud width={16} height={16} />
                                    }>
                                        Beautifully designed components
                                    </NavigationMenuComponent>

                                    <NavigationMenuComponent
                                        href="/"
                                        title="About"
                                        icon={
                                            <Icons.grid width={16} height={16} />
                                    }>
                                        Beautifully designed components
                                    </NavigationMenuComponent>

                                    <NavigationMenuComponent
                                        href="/"
                                        title="Early access"
                                        icon={
                                            <Icons.star width={16} height={16} />
                                    }>
                                        Beautifully designed components
                                    </NavigationMenuComponent>

                                    <NavigationMenuComponent
                                        href="/"
                                        title="Analytics"
                                        icon={
                                            <Icons.activity width={16} height={16} />
                                    }>
                                        Beautifully designed components
                                    </NavigationMenuComponent>
                                </ul>
                            </div>

                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/blog">
                            Blog
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/changelog">
                            Changelog
                        </Link>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>

        <div className="menu-social">
            <div className="flex space-x-3 items-center">
                <Link href="https://github.com" passHref>
                    <Icons.gitHub width={22} height={22} className="w-fit h-fit fill-current cursor-pointer hover:opacity-80 transition duration-300" />
                </Link>
                <Link href="https://twitter.com" passHref>
                    <Icons.twitter width={22} height={22} className="w-fit h-fit fill-current cursor-pointer hover:opacity-80 transition duration-300" />
                </Link>
            </div>
        </div>
    </>
);



const NavigationMenuComponent: React.FC<{
    href: string, icon: React.FC | any, title: string, children: React.ReactNode
}> = ({href, icon, title, children}) => (
    <li className="p-1.5 w-fit">
        <Link
            href={href}
            className={classNames(
                "flex flex-col", "h-full w-full justify-end", 
                "rounded-md", "p-4",
                "hover:backdrop-blur-2xl hover:bg-gray-6 hover:bg-opacity-40",
                "outline-none hover:shadow-lg",
                "duration-300"
        )}>
            <span className={classNames(
                "text-sm font-semibold font-sans", 
                "text-white", "items-center",
                "flex space-x-2",
            )}>
                {icon}
                <span>{title}</span>
            </span>
            <p className="text-sm font-medium font-serif leading-tight text-gray-4">
                {children}
            </p>
            </Link>
    </li>
);

const MobileMenuComponent: React.FC<{
    href: string, children: React.ReactNode
}> = ({href, children}) => (
    <motion.a
        href={href}
        variants={itemVariants}
        className={classNames(
            "block",
            "text-gray-2 hover:text-opacity-60", 
            "transition-colors duration-300"
    )}>
        {children}
        <motion.div 
            initial= {{ 
                opacity: 0,
                width: "0%", 
                x: 0 
            }}
            animate= {{ 
                opacity: 1,
                width: "100%", 
                x: 0 
            }}
            exit= {{ 
                opacity: 0,
                width: "0%", 
                x: 0 
            }}
            transition={{ 
                duration: 0.5,
                origin: 1
            }}
            className={classNames(
                "border-t-1 mt-4 border-solid border-t-gray-5/80",
                "last:hidden",
        )} />
    </motion.a>
)