"use client";

import React, { useState, useEffect, ReactNode } from "react";

// Next
import Link from "next/link";

// ClassNames
import cn from "classnames";

// Icons
import { Icons } from "@components/icons/icons";

// Components
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@components/ui/NavigationMenu";
import Button from '@components/ui/Button';
  
// Lib
import { useToast } from '@lib/hooks/use-toast';

// Framer Motion
import { AnimatePresence, motion } from 'framer-motion';

// Theme
import { useTheme } from 'next-themes';

// Types
export type NavModel = 'system' | 'light' | 'dark';

export const modelTheme: Record<NavModel, any> = {
  system: <Icons.laptop className="h-4 w-4 text-black" />,
  light: <Icons.sun className="h-4 w-4 text-black" />,
  dark: <Icons.moon className="h-4 w-4 text-black" />,
};

type Component = { title: string; description: string };
type MobileComponent = { title: string; href: string, description: string };

const components: Component[] = [
  {
    title: "Generating grammatically correct text",
    description:
      "Synthia creates error-free text that flows naturally.",
  },
  {
    title: "Summarizing or paraphrasing text",
    description:
      "Synthia condenses complex text into simpler, more concise versions.",
  },
  {
    title: "Translating text from one language to another",
    description:
      "Synthia translates text to help people communicate globally.",
  },
  {
    title: "Answering questions based on provided information",
    description: "Synthia provides quick and efficient answers.",
  },
  {
    title: "Classifying or categorizing text based on topic or sentiment",
    description:
      "Synthia categorizes text to identify trends and understand target audiences.",
  },
  {
    title: "Generating text in a specific style or tone, such as formal or informal",
    description:
      "Synthia writes text in a custom style to match specific needs, such as corporate communication or casual settings.",
  },
];

const mobileComponents: MobileComponent[] = [
  {
    title: "Behind the hood",
    href: '/#why-the-model',
    description:
      "Powered by large RoBERTa model",
  },
  {
    title: "How was done",
    href: '/#speed-and-optimization',
    description:
      "Built using Rust and Python alongside with Huggingface and Pytorch libraries",
  },
  {
    title: "Early Access",
    href: '/#early-access',
    description:
      "Request Early Access to our public beta for when we lauch!",
  },
];

export const Header: React.FC = () => {
  const [session, setSession] = useState(true);
  const [open, isOpen] = useState(false);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { toast } = useToast();

  return (
    <header
      className={cn(
        "w-full z-50 fixed top-0 transition",
        hasScrolled && 'backdrop-blur-2xl shadow-sm border-b border-b-solid border-b-black border-opacity-10 transition-all duration-300'
    )}>
      <div className="flex flex-row justify-between px-8 py-5">
        
        <div className="flex flex-none flex-row items-center gap-2">
          <Link href="/">
            <Icons.logo className="h-8 w-8 select-none text-black/90 dark:text-white" />
          </Link>
        </div>

        <motion.div 
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className='hidden sm:block'
        >
          <NavigationMenu dir='ltr'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>All Features</NavigationMenuTrigger>
                <NavigationMenuContent >
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className={cn(
                            "flex h-full w-full select-none flex-col justify-end rounded-md",
                            "bg-orange/10 hover:bg-orange/20 backdrop-blur-lg",
                            "border-solid border border-orange/50",
                            "p-6 no-underline outline-none focus:shadow-md",
                            "transition-colors duration-300"
                          )}
                          href="/"
                        >
                          <div className='flex mb-2 space-x-2 flex-row justify-start text-center'>
                            <Icons.logo className={cn(
                              "h-4 w-4 mt-1.5",
                              "text-center justify-center flex",
                              "text-black dark:text-white text-opacity-80"
                          )} />

                            <span className="first-letter:text-lg font-medium text-black dark:text-white">
                              Synthia
                            </span>
                          </div>
                          <p className="text-sm leading-tight text-black/90 dark:text-white/90">
                            Syntax Inteligent Assistant in the palm of your hands
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/#why-the-model" title="Behind the hood">
                      Powered by large RoBERTa model
                    </ListItem>
                    <ListItem href="/#speed-and-optimization" title="How was done">
                      Built using Rust and Python alongside with Huggingface and Pytorch libraries
                    </ListItem>
                    <ListItem href="/#early-access" title="Early Access">
                      Request Early Access to our public beta for when we lauch!
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Model Abilities</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref              
                  onClick={() =>
                      toast({
                        title: "Sorry, not available",
                        description: "You don't have access to this area yet",
                      })
                    }>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Docs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </motion.div>

        <div className='hidden sm:flex items-center justify-center'>
          <div className='flex flex-row items-center gap-4'>
            {!session && <>
                <Link
                  className="hidden transform whitespace-nowrap text-sm font-medium text-white opacity-60 hover:opacity-100 sm:block"
                  href="/signup"
                >
                  Sign up
                </Link>
                <Link
                  className="button-glow flex flex-row items-center gap-3 whitespace-nowrap rounded-md px-4 py-2 text-sm font-semibold transition dark:bg-white dark:text-neutral-900 hover:dark:bg-neutral-300"
                  href="/login"
                >
                  Sign in
                </Link>
              </>
            }
            <Link href="https://github.com/gabrielvfonseca/syntax-ai-website" target='_blank'>
              <Icons.gitHub className='h-6 w-6 text-night dark:text-platinium hover:text-orange/90 transition-colors' />
            </Link>

            <Link href="https://twitter.com/gabfon_" target='_blank'>
              <Icons.twitter className='h-6 w-6 text-night dark:text-platinium hover:text-orange/90 transition-colors' />
            </Link>
          </div>
        </div>

        <div className='sm:hidden flex flex-none flex-row items-center gap-2'>
          <button 
            onClick={() => isOpen(!open)}
            className={cn(
              'p-1 z-50', 'group', 'bg-black/10 dark:bg-eerie/80 hover:bg-orange/10',
              "border border-solid border-transparent hover:border-orange",
              'transition-colors duration-200 transform rounded-md'
            )}
          >
            <AnimatePresence initial={false}>
              {!open ? 
                <motion.div animate={{rotate: !open ? 180 : 0}}>
                  <Icons.menu className='h-7 w-7 text-night dark:text-white dark:group-hover:text-opacity-70 transition-colors' />
                </motion.div> : 
                <motion.div animate={{rotate: !open ? 360 : 0}}>
                  <Icons.close className='h-7 w-7 text-night dark:text-white dark:group-hover:text-opacity-70 transition-colors' />
                </motion.div>
              }
            </AnimatePresence>
          </button>

          <AnimatePresence>
            {open && <motion.div 
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.1,
                delay: 0.2,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
              }}
              className={cn(
                'w-full z-40 fixed top-0 left-0 h-screen',
                'backdrop-blur-2xl',
            )}>
                <nav className='flex flex-col space-y-10 px-10 mt-20'>
                  {
                    mobileComponents.map((item: MobileComponent, index: number) => (
                      <div 
                        key={index}
                        className='space-y-2 cursor-pointer'
                      >
                        <div
                          onClick={() => {
                            isOpen(!open)
                            window.location.href = item.href;
                          }}
                          className={cn(
                            'flex flex-row flex-grow',
                            'text-lg font-sans font-semibold',
                            'text-black dark:text-white hover:text-orange transition-colors duration-150 transform'
                          )}
                        >
                          {item.title}
                        </div>
                        <motion.div 
                            initial={{ 
                                opacity: 0,
                                width: "0%", 
                                x: 0 
                            }}
                            animate={{ 
                                opacity: 1,
                                width: "100%", 
                                x: 0 
                            }}
                            exit={{ 
                                opacity: 0,
                                width: "0%", 
                                x: 0 
                            }}
                            transition={{ 
                                duration: 0.6,
                                delay: 0.36,
                                origin: 1
                            }}
                            className={cn(
                              'border-b border-b-solid border-b-black/20 dark:border-b-neutral-700'
                        )} />
                      </div>
                    ))
                  }

                  <div className='pt-10 flex flex-row justify-between'>
                      <div className='flex flex-row gap-4 items-center'>
                        <Link href="https://github.com/gabrielvfonseca/syntax-ai-website" target='_blank'>
                          <Icons.gitHub className='h-7 w-7 text-night dark:text-platinium hover:text-orange/90 transition-colors' />
                        </Link>

                        <Link href="https://twitter.com/gabfon_" target='_blank'>
                          <Icons.twitter className='h-7 w-7 text-night dark:text-platinium hover:text-orange/90 transition-colors' />
                        </Link>
                      </div>

                    {
                      !session && <div className='flex flex-row items-center gap-4'>
                        <Button 
                          variant='cta' 
                          buttonSize='lg'
                        >
                          Login
                        </Button>
                        <Button 
                          buttonSize='lg' 
                          className={cn(
                            'border-black border-opacity-60',
                            'hover:bg-black hover:bg-opacity-10 transition-colors'
                          )}>
                            Sign up
                          </Button>
                      </div> 
                    }
                  </div>
                </nav>
              </motion.div>
            }
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}


export const Footer: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const tabs = [
      { id: "dark", label: <Icons.moon className="h-4 w-4" /> },
      { id: "light", label: <Icons.sun className="h-4 w-4" /> },
    ];
  
    const [activeTab, setActiveTab] = useState(theme || tabs[0].id);

    return (
      <motion.footer 
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.4
        }}
        className={cn(
          "relative bottom-0 left-0",
          "px-6 pt-12 sm:py-12 sm:px-8",
          "border-solid border-t-white"
        )}
      >
        <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-10 md:mb-0 space-y-7">
              <Link href="https://flowbite.com/" className="flex items-center space-x-3">
                  <Icons.logo className="text-black dark:text-white" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Synthia</span>
              </Link>
              <p className="dark:text-opacity-90 text-sm font-medium text-black dark:text-gray-300">
                Made with ❤️ (and much ☕) by 
                <Link href="https://gabfon.me/" className="hover:text-orange transition-colors">
                  {" Gabriel"}
                </Link>.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:gap-8 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase dark:text-neutral-200">Resources</h2>
                <ul className="text-black/90 dark:text-gray-400 font-medium">
                    <li>
                        <Link href="/docs" className="hover:text-orange transition-colors">Docs</Link>
                    </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase dark:text-neutral-200">Legal</h2>
                <ul className="text-black/90 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <Link href="/privacy" className="hover:text-orange transition-colors">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="/terms" className="hover:text-orange transition-colors">Terms &amp; Conditions</Link>
                    </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase dark:text-neutral-200">Follow</h2>
                <ul className="text-black/90 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <Link href="https://github.com/gabrielvfonseca/syntax-ai-website" target="_blank" className="hover:text-orange transition-colors">GitHub</Link>
                    </li>
                    <li>
                        <Link href="https://twitter.com/gabfon_" target="_blank" className="hover:text-orange transition-colors">Twitter</Link>
                    </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-10 border-black/20 dark:border-neutral-700 sm:mx-auto lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-800 sm:text-center dark:text-gray-400">
              &#169; 2023
              <Link 
                href="/" 
                className="hover:text-orange transition-colors"
              >{" Synthia"}</Link>. All Rights Reserved.
            </span>
            
            <div className="flex space-x-1 p-1 rounded-full border border-black/20 dark:border-neutral-700/60">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setTheme(tab.id)
                    console.log(activeTab, tab.id)
                  }}
                  className={`${
                    activeTab === tab.id ? "" : "hover:text-orange text-black dark:text-white"
                  } relative rounded-full px-3 py-1.5 text-sm font-medium text-eerie dark:text-white outline-eerie hover:outline-night dark:hover:outline-eerie transition focus-visible:outline-2`}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-10 bg-white dark:bg-eerie mix-blend-difference"
                      style={{ borderRadius: 9999 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    )
}


const LandingLayout: React.FC<{
    children: ReactNode
}> = ({ children }) => {
    return (
        <>
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            "hover:bg-white/50 focus:bg-white/50 dark:hover:bg-black/50 dark:focus:bg-black/60",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none dark:text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-black/90 dark:text-white/70">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem";


export default LandingLayout;