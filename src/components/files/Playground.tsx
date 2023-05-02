"use client";

import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

// ClassNames
import cn from 'classnames';

// Lib
import { timeout } from '@lib/utils';

// Types
import { PromptDemo } from "@root/src/types/types";

const Caret = () => {
  return (
    <i className="caret animate-caret inline-block h-[15px] w-[8px] translate-y-[2px] translate-x-[2px] transform rounded-[1px] bg-cinnabar shadow-[0_0px_3px_0px_rgba(248,64,38,0.9)]" />
  );
};

type WithCaretProps = {
  Component: string;
  children?: ReactNode;
} & any;

const WithCaret: FC<WithCaretProps> = ({ Component, children, ...rest }) => {
  // Sometimes, react-markdown sends props of incorrect type,
  // causing React errors. To be safe, we normalize them here.
  const stringifiedProps = Object.keys(rest).reduce((acc, key) => {
    const value = rest[key];
    if (value === null || typeof value === 'undefined') {
      return acc;
    }
    return {
      ...acc,
      key: typeof value !== 'string' ? value.toString() : value,
    };
  }, {});

  return (
    <Component {...stringifiedProps} className="markdown-node">
      {children}
      <Caret />
    </Component>
  );
};

type PlaygroundProps = {
  didCompleteFirstQuery?: () => void;
  onDark?: boolean;
  autoScrollDisabled?: boolean;
  isDemoMode?: boolean;
  playing?: boolean;
  demo?: PromptDemo,
  iDontKnowMessage?: string;
};

export const Playground: FC<PlaygroundProps> = ({
  didCompleteFirstQuery,
  onDark,
  autoScrollDisabled,
  isDemoMode,
  playing,
  demo,
}) => {
  const [prompt, setPrompt] = useState<string | undefined>(undefined);
  const [answer, setAnswer] = useState('');
  const [references, setReferences] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const answerContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const _didCompleteFirstQuery = useRef<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!playing || !demo) {
      return;
    }

    timeoutRef.current = setTimeout(async () => {
      let index = Math.floor(Math.random() * demo.length);

      let demoPrompt = demo[index].prompt;
      let demoResponse = demo[index].res;
      let demoReferences = demo[index].references;

      inputRef.current?.focus();
      const promptChunks = demoPrompt.split('');
      await timeout(500);
      for (const prompt of promptChunks) {
        setPrompt((p) => (p ? p : '') + prompt);
        await timeout(Math.random() * 10 + 30);
      }

      await timeout(500);
      setLoading(true);
      await timeout(2000);
      const responseChunks = demoResponse.split(' ');
      for (const chunk of responseChunks) {
        setAnswer((a) => a + chunk + ' ');
        await timeout(Math.random() * 10 + 70);
      }
      setLoading(false);
      await timeout(500);
      setReferences(demoReferences || []);
    }, 200);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [playing, demo]);

  const setAnswerAnimated = useCallback(async (answer: string) => {
    const responseChunks = answer.split(' ');
    for (const chunk of responseChunks) {
      setAnswer((a) => a + chunk + ' ');
      await timeout(Math.random() * 10 + 70);
    }
  }, []);

  useEffect(() => {
    if (
      autoScrollDisabled ||
      !containerRef.current ||
      !answerContainerRef.current
    ) {
      return;
    }

    const childRect = answerContainerRef.current.getBoundingClientRect();
    containerRef.current.scrollTop = childRect.bottom;
  }, [answer, loading, autoScrollDisabled, references]);

  useEffect(() => {
    if (!loading && answer.length > 0) {
      // This gets called after an answer has completed.
      if (!_didCompleteFirstQuery.current) {
        _didCompleteFirstQuery.current = true;
        didCompleteFirstQuery?.();
      }
    }
  }, [loading, answer, didCompleteFirstQuery]);

  return (
    <div className="relative flex h-full flex-col">
      <div className="relative h-12 border-b border-black border-opacity-10">
        <form>
          <input
            ref={inputRef}
            value={prompt || ''}
            type="text"
            disabled
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Try asking me anything..."
            className={cn(
              'w-full appearance-none rounded-md border-0 bg-transparent px-0 pt-1 pb-2 text-black/90 dark:text-white outline-none transition duration-500 placeholder:text-neutral-900 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-0',
              {
                'pointer-events-none': isDemoMode && playing,
              },
            )}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck="false"
            autoFocus={false}
          />
        </form>
      </div>
      <div
        className={cn(
          'absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t',
          {
            'from-neutral-1000 to-neutral-1000/0': !onDark,
            'from-neutral-1100 to-neutral-1100/0': onDark,
          },
        )}
      />
      <div
        ref={containerRef}
        className="hidden-scrollbar prose prose-sm absolute inset-x-0 bottom-0 top-12 z-0 max-w-full overflow-y-auto scroll-smooth py-4 pb-8 dark:prose-invert"
      >
        {loading && !(answer.length > 0) && <Caret />}
        {/* Need a container for ReactMarkdown to be able to access
            :last-child and display the caret */}
        <div
          className={cn('prompt-answer', {
            'prompt-answer-done': !loading,
            'prompt-answer-loading': loading,
          })}
        >
          <ReactMarkdown
            components={{
              p: (props) => <WithCaret Component="p" {...props} />,
              span: (props) => <WithCaret Component="span" {...props} />,
              h1: (props) => <WithCaret Component="h1" {...props} />,
              h2: (props) => <WithCaret Component="h2" {...props} />,
              h3: (props) => <WithCaret Component="h3" {...props} />,
              h4: (props) => <WithCaret Component="h4" {...props} />,
              h5: (props) => <WithCaret Component="h5" {...props} />,
              h6: (props) => <WithCaret Component="h6" {...props} />,
              pre: (props) => <WithCaret Component="pre" {...props} />,
              code: (props) => <WithCaret Component="code" {...props} />,
              td: (props) => <WithCaret Component="td" {...props} />,
              li: (props) => <WithCaret Component="li" {...props} />,
            }}
            remarkPlugins={[remarkGfm]}
          >
            {answer}
          </ReactMarkdown>
        </div>
        {answer.length > 0 && references.length > 0 && (
          <div className="mt-8 border-t border-black border-opacity-10 pt-4 text-sm text-neutral-500">
            <div className="animate-slide-up">
              Summary generated based on the following sources:
              <div className="mt-4 flex w-full flex-row flex-wrap items-center gap-2">
                {references.map((r) => (
                  <div
                    key={`reference-${r}`}
                    className="cursor-default rounded-md border border-orange px-2 py-1 text-sm font-medium text-eerie dark:text-neutral-500 hover:bg-orange/50 hover:border-cinnabar hover:text-opacity-90 dark:hover:text-zinc-100 duration-150 transition-colors"
                  >
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="h-8" />
        <div ref={answerContainerRef} />
      </div>
    </div>
  );
};
