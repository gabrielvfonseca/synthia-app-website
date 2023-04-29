import * as Popover from '@radix-ui/react-popover';
import { FC, ReactNode, useState } from 'react';

import { Playground } from '../files/Playground';

import { Icons } from '@components/icons/icons';

type DocsPromptProps = {
  children: ReactNode;
};

export const DocsPrompt: FC<DocsPromptProps> = ({ children }) => {
  const [promptOpen, setPromptOpen] = useState(false);

  return (
    <Popover.Root open={promptOpen} onOpenChange={setPromptOpen}>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="animate-chat-window z-30 mr-4 mb-4 w-[calc(100vw-32px)] sm:w-full">
          <div className="relative mt-4 h-[calc(100vh-240px)] max-h-[560px] w-full overflow-hidden rounded-lg border border-neutral-900 bg-neutral-1000 p-4 shadow-2xl sm:w-[400px]">
            <Playground />
            <Popover.Close
              className="absolute top-5 right-3 z-20 rounded p-1 outline-none backdrop-blur transition hover:bg-neutral-900"
              aria-label="Close"
            >
              <Icons.close className="h-4 w-4 text-neutral-300" />
            </Popover.Close>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
