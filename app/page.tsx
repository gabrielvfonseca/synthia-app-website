"use client"

import { useEffect, useMemo, useRef, useState } from 'react';

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

        <div className="relative mx-auto min-h-screen max-w-screen-xl">
          <Glow />

          <div className="grid gap-8 items-start justify-center mt-36">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange to-cinnabar rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <button className="relative px-4 py-2 bg-night rounded-lg leading-none flex items-center divide-x divide-isabelline/60">
                <span className="flex items-center space-x-5">
                  <span className="pr-6 text-platinium text-sm">
                    Currently under development
                  </span>
                </span>
                <span className="pl-6 text-sm text-platinium group-hover:text-rose transition duration-200">
                  Not yet finished! {/*See what's new &rarr;*/}
                </span>
              </button>
            </div>
          </div>

          <div className="px-6 sm:px-8">
            <h1 className={cn(
              "gradient-heading", "mt-16 pb-4", 
              "text-center text-5xl px-2 font-extrabold leading-[58px] tracking-[-0.6px] sm:text-7xl sm:px-0 sm:leading-[74px]", 
            )}>
              <Balancer>
                Supercharged by syntax AI - millions 
                of answers at your fingertips!
              </Balancer>
            </h1>
            <p className={cn(
              "mx-auto mt-4 font-sans font-normal max-w-md text-center text-lg text-neutral-700",
            )}>
              Synthia can help you with anything from finding information
              to completing tasks, all through a simple chat interface.
            </p>

            <div className="flex flex-row items-center justify-center gap-4 pt-8">
              <Button
                variant="cta"
                buttonSize="lg"
                href='/#early-access'
              >
                Request Access
              </Button>
            </div>
          </div>

          <div className='card-glow'>
            <div className='glow' />
          </div>
          <GridGlow />

          <div className='grid grid-cols-2 gap-4 mt-32 px-6 sm:px-8'>
            <div className='card'>
              <div className='space-y-5'>
                <h3>
                  <Balancer>
                    Research project
                  </Balancer>
                </h3>
                <p>
                  <Balancer>
                    We're a research project that leverages large language models like RoBERTa to push 
                    the boundaries of what's possible in the field of natural language processing and
                    beyond!     
                  </Balancer>
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='space-y-5'>
                <h3>
                  <Balancer>
                    Completly open-source 
                  </Balancer>
                </h3>
                <p>
                  <Balancer>
                    we are proud to say that our model is completely open-source, which means 
                    that anyone can access our code and make use of it for their own purposes. 
                  </Balancer>
                </p>
              </div>
            </div>

            <div className='card'>
              <div className='space-y-5'>
                <h3>
                  <Balancer>
                    Fine-tuned to handle everything!
                  </Balancer>
                </h3>
                <p>
                  <Balancer>
                    Our model is versatile, reliable, and accurate. It has been extensively 
                    tested and trained on 2.5TB of data, making it adaptable to new environments. 
                    It is ideal for processing large amounts of data or complex computations.   
                  </Balancer>         
                </p>
              </div>
            </div>

            <div className='card'>
              <Badge variant="gradient" className='mb-4'>Not Ready</Badge>
              <div className='space-y-5'>
                <h3>
                  <Balancer>
                    A direct line to our API
                  </Balancer>
                </h3>
                <p>
                  <Balancer>
                    We're creating a direct line connection API to let users easily use our 
                    model for their projects. It's an exciting new feature that will empower
                    users to unlock our technology's full potential!
                  </Balancer>
                </p>
              </div>
            </div>
          </div>

          <div className='relative' id="playground">
            <TopGlow />

            <h2 className={cn(
              "gradient-heading",
              "mt-40 pb-4 px-6 sm:px-8", 
              "text-center text-5xl font-bold leading-[44px] tracking-[-0.6px]", 
            )}>
              <Balancer>
                This is just a demo example. But you get the idea.              
              </Balancer>
            </h2>

          </div>

          <div className="mt-10">
            <div 
              className={cn(
                "relative bg-white", 
                "p-8 h-[500px] w-full z-20", 
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
          
          <div className='px-6 sm:px-8'>
            <h2 className={cn(
              "gradient-heading", "mt-28 pb-4", 
              "text-center text-5xl font-bold leading-[44px] tracking-[-0.6px]", 
            )}>
              <Balancer>
                Write Better, Faster, and More Confidently with this Features 
              </Balancer>
            </h2>
          
            <div className="relative mt-20 w-full overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="board-gradient md:col-span-2" id="why-the-model">
                <div className='space-y-5'>
                  <h3>
                    <Balancer>
                      Why?
                    </Balancer>
                  </h3>
                  <p>
                    As GPT-4 models merge, we at Synthia have developed our own language 
                    model assistant using Facebook's RoBERTa. Synthia assists users in generating 
                    more accurate and grammatically correct text to improve their writing skills and 
                    optimize content for better communication. We are committed to providing top-notch 
                    service and will continue to improve our services in the future. Enjoy using Synthia!
                  </p>
                </div>
              </div>

              <div className="board" id="cloud-model">
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
              </div>

              <div className="board" id="speed-and-optimization">
                <div className='space-y-5'>
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
              </div>

              <div className="board" id="roberta-nlp">
                <div className='space-y-5'>
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
              </div>

              <div className="board" id="privacy-data">
                <div className='space-y-5'>
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
              </div>
            </div> 
          </div>

          <div className='mt-40 px-6 sm:px-8' id="early-access">
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

              <div className="mt-8 space-y-5">
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
                  Sign me up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};