"use client";

import React, { 
  useEffect, 
  useMemo, 
  useRef, 
  useState, 
  MouseEvent 
} from 'react';

// Components
import Layout from "@components/layouts/Layout";
import Prompt from "@components/ui/Prompt";
import { Playground } from '@components/files/Playground';

const demo = {
    prompt: 'How do I publish a component?',
    res: `To publish a component on Acme, follow these steps:
    - At the root of your project, open or create a file named \`index.js\`, and add the following lines (you can add as many components as you need):
    \`\`\`js
    import Component1 from "/path/to/component1
    import Component2 from "/path/to/component2
    export {
      Component1,
      Component2,
      // ...
    }
    \`\`\`
    - Then, head over to the Component Library, accessible via the sidebar.
    - Navigate to the Publish tab, and set a new semantic version. It must be higher than the previous one.
    - Hit "Publish".`,
        references: ['Getting Started', 'Publishing', 'Components']
}

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

    useEffect(() => {
        if (isInputVisible) {
          setAutoplayPlayground(true);
        }
      }, [isInputVisible]);

    return (
      <Layout className="overflow-hidden">
            <section className="w-full flex items-center mt-20 justify-center overflow-y-hidden">
                <div className='mx-auto max-w-3xl py-8 px-16 h-[500px] w-full z-20'>
                    <Playground
                        onDark
                        isDemoMode
                        playing={autoplayPlayground}
                        demoPrompt={demo.prompt}
                        demoResponse={demo.res}
                        demoReferences={demo.references}
                    />
                    <div
                    ref={playgroundAnchorRef}
                    className="pointer-events-none absolute right-0 bottom-32 h-2 w-2 opacity-0"
                    />
                </div>
            </section>
            <Prompt />
      </Layout>
    )
  };