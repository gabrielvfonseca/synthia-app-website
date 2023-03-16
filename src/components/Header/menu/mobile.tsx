"use client"

import React, {
    useState, useEffect
} from "react";

import classNames from "classnames";

import { Icons } from "@icons/icons";

// Ui Components
import { Button } from "../../../ui/Button";

// Framer Motion
import { AnimatePresence, motion } from "framer-motion";

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

const MenuMobile: React.FC = () => {
    const [open, setOpen] = useState(false);
    
    const handleDocumentClick = (event) => {
        if (!event.target.closest('side-menu') && open) {
            setOpen(!open);
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
                            <NavigationMenuComponent href="/">
                                Developer
                            </NavigationMenuComponent>

                            <NavigationMenuComponent href="/">
                                Blog
                            </NavigationMenuComponent>

                            <NavigationMenuComponent href="/">
                                Changelog
                            </NavigationMenuComponent>

                            <NavigationMenuComponent href="/">
                                GitHub
                            </NavigationMenuComponent>

                            <NavigationMenuComponent href="/">
                                Twitter
                            </NavigationMenuComponent>
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>
            <Button 
                variant="toggle" 
                size="square"
                onClick={() => setOpen(!open)}
                className={classNames(
                    "p-1", "z-50",
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
    )
};

export default MenuMobile;


const NavigationMenuComponent: React.FC<{
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
);
