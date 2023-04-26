"use client"

import React, { 
  useEffect, 
  useMemo, 
  useRef, 
  useState, 
  MouseEvent 
} from 'react';

// Next
import Link from 'next/link';

// ClassNames
import cn from 'classnames';

// Components
import { Header } from '@components/layouts/Header';
import { Footer } from '@components/layouts/Footer';

import { Pattern } from '@components/ui/Pattern';
import { Glow, GridGlow, TopGlow } from '@components/ui/Glow';
import Button from '@components/ui/Button';
import Input from '@components/ui/Input';
import { Badge } from '@components/ui/Badge';

import { ToastAction } from "@components/ui/Toast";

import { Playground } from '@components/files/Playground';

// Icons
import { Icons } from "@icons/icons";

// Lib
import Balancer from 'react-wrap-balancer';
import { useToast } from "@lib/hooks/use-toast";

// Demo
import demoData from "@root/src/examples/data";

// Types
import { EmailState } from '@root/src/types/types';

export interface BoardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

/* Framer Motion */
import { 
  motion, 
  useMotionTemplate, 
  useMotionValue,  
} from "framer-motion";

const animation = {
  fadeIn: {
    initial: { 
      opacity: 0, 
      scale: 0.94,
    },
    animate: { 
        opacity: 1, 
        scale: 1,
    },
    transition: { 
        duration: 0.18,
    },
    exit: { 
        opacity: 0, 
        scale: 0.94,
    },
  },
  whileInView: {
    whileInView: {
      y: 0,
      opacity: 1,
    },
    initial: { 
        y: 8,
        opacity: 0
    },
    transition: {
      duration: 0.20,
      delay: 0.16
    }
  }
};


const useOnScreen = (ref: any) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return undefined;
    }
    return new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  useEffect(() => {
    if (!ref.current || !observer) {
      return;
    }
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [observer, ref]);

  return isIntersecting;
};

const Board: React.FC<BoardProps> = ({
  children, title, ...props
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      style={
        {
          "--dark-purple": "255 255 255",
          "--light-purple": "238 86 34",

          "--bg-color":
            "linear-gradient(rgb(var(--dark-purple)), rgb(var(--dark-purple)))",
          "--border-color": `linear-gradient(145deg,
            rgb(var(--light-purple)) 0%,
            rgb(var(--light-purple) / 0.3) 33.33%,
            rgb(var(--light-purple) / 0.14) 66.67%,
            rgb(var(--light-purple) / 0.1) 100%)
          `,
        } as React.CSSProperties
      }
      className={cn(
        "border border-transparent rounded-xl",
        "[background:padding-box_var(--bg-color),border-box_var(--border-color)]",
        "md:col-span-2 shadow" 
      )}
      {...props}
    >
      <motion.div
        className={cn(
          "flex aspect-[2/1] flex-col",
          "text-center justify-center",
          "rounded-xl w-full h-full space-y-6",
          "py-7 px-8"
        )}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(238, 86, 34, 0.15),
              transparent 80%
            )
          `,
        }} 
      >
        <h3 className="text-3xl font-semibold font-sans text-black">
            {title}
        </h3>
        <p className="text-lg font-medium leading-7 text-zinc-700">
          <Balancer>
            {children}
          </Balancer>
        </p>
      </motion.div>
    </div>
  );
}

const Card: React.FC<{
  title: string, children: React.ReactNode, badge?: string,
}> = ({ title, children, badge }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={animation.whileInView.initial}
      transition={animation.whileInView.transition}
      whileInView={animation.whileInView.whileInView}
      className="group relative w-full rounded-2xl border border-black/20 bg-zinc-50 bg-opacity-30 px-6 py-10 shadow-md"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(238, 86, 34, 0.10),
              transparent 80%
            )
          `,
        }}
      />
      <div>
        { badge && <Badge variant="gradient" className='mb-6'>{badge}</Badge> }
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-4xl font-bold tracking-tight text-black">
            {title}
          </span>
        </div>
        <p className="mt-6 text-base leading-7 text-zinc-700">
          <Balancer>
            {children}
          </Balancer>
        </p>
      </div>
    </motion.div>
  )
}

export default function Page(): JSX.Element {
  const playgroundAnchorRef = useRef<HTMLDivElement | null>(null);
  const isInputVisible = useOnScreen(playgroundAnchorRef);
  const [autoplayPlayground, setAutoplayPlayground] = useState(false);

  const [email, setNewEmail] = useState<EmailState>({
    address: '',
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    insert: [],
  });

  const { toast } = useToast();

  async function handleButtonPress (e: any) {
    const error: boolean = true;
    
    if (!email.pattern.test(email.address) || email.address === '') return toast({
      description: "Enter a valid email address",
    })
    
    if (!error) {
      return toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    } else {
      toast({
        title: "Success!",
        description: "Email registered on waitlist",
      })

      // Save email inside array
      email.insert.push(...email.insert, email.address);

      console.log(email.insert);
    }
  };

  useEffect(() => {
    if (isInputVisible) {
      setAutoplayPlayground(true);
    }
  }, [isInputVisible]);

  return (
    <>
      <Header />
      <main>
        <Pattern />

        <div className='relative'>
          <Glow />

          <motion.div 
            initial={animation.fadeIn.initial}
            animate={animation.fadeIn.animate}
            exit={animation.fadeIn.exit}
            transition={animation.fadeIn.transition}
            className="px-10 sm:px-8 flex flex-col justify-center items-center min-h-screen"
          >
            <h1 className={cn(
              "gradient-heading", "pb-4 px-4 sm:px-0 mt-28",
              "min-w-fit max-w-sm sm:max-w-md lg:w-1/3", 
              "text-5xl sm:text-6xl lg:text-7xl",
              "leading-[54px] sm:leading-[60px] lg:leading-[78px]",
              "text-center font-extrabold tracking-[-0.6px]", 
            )}>
              Supercharged by syntax AI - millions 
              of answers at your fingertips!
            </h1>
            <p className={cn(
              "mx-auto mt-4 font-sans font-normal max-w-md text-center text-lg text-neutral-700",
            )}>
              Synthia can help you with anything from finding information
              to completing tasks, all through a simple chat interface.
            </p>

            <motion.div 
              initial={animation.fadeIn.initial}
              animate={animation.fadeIn.animate}
              exit={animation.fadeIn.exit}
              transition={{ 
                duration: 0.18,
                delay: 0.8,
              }}
              className="flex flex-row items-center justify-center gap-4 pt-8"
            >
              <Button
                variant="cta"
                buttonSize="lg"
                href='/#early-access'
              >
                Request Access
              </Button>
            </motion.div>
          </motion.div>

          <div className='relative'>
            <GridGlow />

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-32 px-6 sm:px-28'>
              <Card title='Research project'>
                This is a research project that leverages large language models like RoBERTa developed by 
                <Link href="https://gabfon.me" className='text-orange'>{" Gabriel"}</Link>, that pushes the boundaries of what's possible 
                in the field of natural language processing and beyond!
              </Card>

              <Card title='Completly open-source'>
                we are proud to say that our model is completely open-source, which means 
                that anyone can access our code and make use of it for their own purposes. 
              </Card>

              <Card title='Fine-tuned to handle everything!'>
                Our model is versatile, reliable, and accurate. It has been extensively 
                tested and trained on 2.5TB of data, making it adaptable to new environments. 
                It is ideal for processing large amounts of data or complex computations.  
              </Card>

              <Card title='A direct line to our API' badge='Soon!'>
                We're creating a direct line connection API to let users easily use our 
                model for their projects. It's an exciting new feature that will empower
                users to unlock our technology's full potential!
              </Card>
            </div>
          </div>

          <div className='relative' id="playground">
            <TopGlow />

            <h2 className={cn(
              "gradient-heading",
              "mt-40 pb-4 px-6 sm:px-28", 
              "text-center text-5xl font-bold leading-[44px] tracking-[-0.6px]", 
            )}>
              <Balancer>
                This is just sneak peek of what we can do            
              </Balancer>
            </h2>

          </div>

          <div className="mt-10">
            <div 
              className={cn(
                "relative bg-white", 
                "py-8 px-20 h-[500px] w-full z-20", 
            )}>
              <Playground
                onDark
                isDemoMode
                playing={autoplayPlayground}
                demo={demoData}
              />
              <div
                ref={playgroundAnchorRef}
                className="pointer-events-none absolute right-0 bottom-32 h-2 w-2 opacity-0"
              />
            </div>
          </div>
          
          <div className='px-6 sm:px-28'>
            <h2 className={cn(
              "gradient-heading", "mt-28 pb-4", 
              "text-center text-5xl font-bold leading-[44px] tracking-[-0.6px]", 
            )}>
              <Balancer>
                Write Better, Faster, and More Confidently with this Features 
              </Balancer>
            </h2>
          
            <div className="relative mt-20 w-full overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-4">

              <Board title='Why?'>
                As GPT-4 models merge, we at Synthia have developed our own language 
                model assistant using Facebook's RoBERTa. Synthia assists users in generating 
                more accurate and grammatically correct text to improve their writing skills and 
                optimize content for better communication. We are committed to providing top-notch 
                service and will continue to improve our services in the future. Enjoy using Synthia!
              </Board>

              <motion.div 
                initial={animation.whileInView.initial}
                transition={animation.whileInView.transition}
                whileInView={animation.whileInView.whileInView}
                className="board" 
                id="cloud-model"
              >
                <div className='space-y-5'>
                  <div className='p-3 bg-platinium/40 rounded-xl w-fit h-fit'>
                    <Icons.cloud className='w-6 h-6 text-neutral-800' />
                  </div>
                  <h3>
                    <Balancer>
                      100% on the cloud
                    </Balancer>
                  </h3>
                  <p>
                    We designed our model to be 100% in the cloud. 
                    All resources and computing power is pushed from our dedicated servers.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={animation.whileInView.initial}
                transition={animation.whileInView.transition}
                whileInView={animation.whileInView.whileInView}
                className="board" 
                id="cloud-model"
              >                <div className='space-y-5'>
                  <div className='p-3 bg-platinium/40 rounded-xl w-fit h-fit'>
                    <Icons.gauge className='w-6 h-6 text-neutral-800' />
                  </div>
                  <h3>
                    <Balancer>
                      Speed and optimization using Python and Rust
                    </Balancer>
                  </h3>
                  <p>
                    We use Python along side with Rust, 
                    optimizing speed and performance for 
                    quick and precise results, even with 
                    large amounts of text.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={animation.whileInView.initial}
                transition={animation.whileInView.transition}
                whileInView={animation.whileInView.whileInView}
                className="board" 
                id="cloud-model"
              >                <div className='space-y-5'>
                  <div className='p-3 bg-platinium/40 rounded-xl w-fit h-fit'>
                    <Icons.activity className='w-6 h-6 text-neutral-800' />
                  </div>
                  <h3>
                    <Balancer>
                      RoBERTa-powered advanced natural language processing
                    </Balancer>
                  </h3>
                  <p>
                    Using RoBERTa-powered natural language processing and 
                    personalized writing insights. Users can achieve 
                    writing goals efficiently while retaining control 
                    over the platform.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={animation.whileInView.initial}
                transition={animation.whileInView.transition}
                whileInView={animation.whileInView.whileInView}
                className="board" 
                id="cloud-model"
              >                <div className='space-y-5'>
                  <div className='p-3 bg-platinium/40 rounded-xl w-fit h-fit'>
                    <Icons.database className='w-6 h-6 text-neutral-800' />
                  </div>
                  <h3>
                    <Balancer>
                      Your data is safe with us
                    </Balancer>
                  </h3>
                  <p>
                    We value privacy. 
                    All conversational data is store securely on our servers only for model improvement.
                  </p>
                </div>
              </motion.div>
            </div> 
          </div>

          <motion.div 
            initial={animation.fadeIn.initial}
            animate={animation.fadeIn.animate}
            exit={animation.fadeIn.exit}
            transition={animation.fadeIn.transition}
            className='mt-40 px-6 sm:px-8' 
            id="early-access"
          >
            <div className="flex flex-col items-center">
              <h2 className={cn(
                "gradient-heading", "pb-4", 
                "text-center text-5xl font-bold leading-[44px] tracking-[-0.6px]", 
              )}>
                <Balancer>
                  Request Early Access 
                </Balancer>
              </h2>
              <p className={cn(
                "mx-auto mt-4 font-sans font-normal max-w-md text-center text-lg text-neutral-700",
              )}>
                <Balancer>
                  Help us shape Synthia, get a sneak peek at our beta by 
                  joining our Early Access program today!
                </Balancer>
              </p>

              <motion.div 
                initial={animation.fadeIn.initial}
                animate={animation.fadeIn.animate}
                exit={animation.fadeIn.exit}
                transition={{ 
                  duration: 0.18,
                  delay: 0.5,
                }}
                className="mt-8 space-y-5"
              >
                <Input 
                  type="text"
                  value={email.address}
                  onChange={(e: any) => setNewEmail({ ...email, address: e.target.value })}
                  inputSize="lg" 
                  variant="plain" 
                  className="py-2 px-3"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$"
                  placeholder="Enter email address" 
                />

                <Button 
                  variant='orange' 
                  className='w-full'
                  onClick={handleButtonPress}
                >
                    <div>Sign me up</div>
                </Button>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
};