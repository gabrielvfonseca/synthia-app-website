"use client"

import { FC } from 'react';

import { toast } from 'react-hot-toast';

// Icons
import { Icons } from '@components/icons/icons';

// Components
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

// Lib
import { copyToClipboard } from '@lib/utils';

// Types
type CodeProps = {
  code: string;
  language: Language;
  className?: string;
};

export const Code: FC<CodeProps> = ({ code, language, className }) => {
  return (
    <div className={className}>
      <Highlight {...defaultProps} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={`code-line-${i}`} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span
                    key={`code-line-${i}-${key}`}
                    {...getTokenProps({ token, key })}
                  />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};



export const CodePanel: FC<CodeProps> = ({ code, language, className }) => {
  return (
    <div className="not-prose relative my-6 w-full rounded-lg border border-neutral-900 bg-neutral-1000 p-4 text-sm">
      <div className="overflow-x-auto">
        <Code language={language} code={code} className={className} />
      </div>
      <div
        className="absolute right-[12px] top-[12px] cursor-pointer rounded bg-neutral-1000/80 p-2 backdrop-blur transition dark:hover:bg-neutral-900"
        onClick={() => {
          copyToClipboard(code);
          toast.success('Copied!');
        }}
      >
        <Icons.clipboard className="h-4 w-4 text-neutral-500" />
      </div>
    </div>
  );
};
