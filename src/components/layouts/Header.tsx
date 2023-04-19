"use client"

import React, { useState, useEffect } from 'react';

// Next
import Link from 'next/link';

// Components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@components/ui/NavigationMenu";

// ClassNames
import cn from "classnames";

// Icons
import { Icons } from "@icons/icons";
import Button from '@components/ui/Button';

// Lib
import { useToast } from '@lib/hooks/use-toast';

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
    <header className={cn(
      "w-full z-50 fixed top-0 transition",
      hasScrolled && 'backdrop-blur-2xl shadow-sm border-b border-b-solid border-b-black border-opacity-10 transition-all duration-300'
    )}>
      <div className="flex flex-row justify-between px-8 py-5">
        
        <div className="flex flex-none flex-row items-center gap-2">
          <Link href="/">
            <Icons.logo className="h-8 w-8 select-none text-black/90 dark:text-white" />
          </Link>
        </div>

        <div className='hidden sm:block'>
          <NavigationMenu dir='ltr'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>All Features</NavigationMenuTrigger>
                <NavigationMenuContent >
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-white/40 backdrop-blur-lg p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className='flex mb-2 space-x-2 flex-row justify-start text-center'>
                            <Icons.logo className={cn(
                              "h-4 w-4 mt-1.5",
                              "text-center justify-center flex",
                              "text-black text-opacity-80"
                          )} />

                            <span className="first-letter:text-lg font-medium text-black">
                              Synthia
                            </span>
                          </div>
                          <p className="text-sm leading-tight text-black/90">
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
                <div 
                  onClick={() =>
                    toast({
                      title: "Sorry, not available",
                      description: "You don't have access to this area yet",
                    })
                  }
                  className='hover:text-orange delay-150 cursor-pointer transition-colors'
                >
                  Login
                </div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

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
            <Link href="https://github.com/gabrielvfonseca/synthia-landing-website" target='_blank'>
              <Icons.gitHub className='h-6 w-6 text-night dark:text-platinium hover:text-cinnabar/90 transition-colors' />
            </Link>

            <Link href="https://twitter.com/gabfon_" target='_blank'>
              <Icons.twitter className='h-6 w-6 text-night dark:text-platinium hover:text-cinnabar/90 transition-colors' />
            </Link>
          </div>
        </div>

        <div className='sm:hidden flex flex-none flex-row items-center gap-2'>
          <button 
            onClick={() => isOpen(!open)}
            className={cn(
              'p-1 z-50', 'bg-transparent hover:bg-black hover:bg-opacity-10',
              'transition-colors duration-200 transform rounded-md'
            )}
          >
            {
              !open ? <Icons.menu className='h-7 w-7 text-night' />
              : <Icons.close className='h-7 w-7 text-night' />
            }
          </button>

          {open && <div className={cn(
            'w-full z-40 fixed top-0 left-0 h-screen',
            'backdrop-blur-2xl transition-all duration-500',
            'animate-slide-up'
          )}>
              <nav className='flex flex-col space-y-4 px-10 mt-20'>
                {
                  mobileComponents.map((item: MobileComponent, index: number) => (
                    <div 
                      key={index}
                      className={cn(
                        'py-4',
                        'border-b border-b-solid border-b-black border-opacity-10'
                      )}
                    >
                      <div
                        onClick={() => {
                          isOpen(!open)
                          window.location.href = item.href;
                        }}
                        className={cn(
                          'flex flex-row flex-grow',
                          'text-lg font-sans font-semibold',
                          'text-black hover:text-orange transition-colors duration-150 transform'
                        )}
                      >
                        {item.title}
                      </div>
                    </div>
                  ))
                }

                <div className='pt-10 flex flex-row justify-between'>
                    <div className='flex flex-row gap-4 items-center'>
                      <Link href="https://github.com/gabrielvfonseca/synthia-landing-website" target='_blank'>
                        <Icons.gitHub className='h-8 w-8 text-night dark:text-platinium hover:text-cinnabar/90 transition-colors' />
                      </Link>

                      <Link href="https://twitter.com/gabfon_" target='_blank'>
                        <Icons.twitter className='h-8 w-8 text-night dark:text-platinium hover:text-cinnabar/90 transition-colors' />
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
            </div>
          }
        </div>
      </div>
    </header>
  );
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/50 focus:bg-white/50",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-black/90">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"