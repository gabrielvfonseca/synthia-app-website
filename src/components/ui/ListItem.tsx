import { ReactNode } from 'react';

// ClassNames
import cn from 'classnames';

// Icons
import { Icons } from '@components/icons/icons';

export const ListItem = ({
  size = 'base',
  variant,
  children,
  number,
}: {
  size?: 'sm' | 'base';
  variant?: 'discreet' | 'numeric' | 'checked';
  children: ReactNode;
  number?: number,
}) => {
  const cva = "h-3 w-3 text-neutral-500";

  return (
    <li
      className={cn('flex w-full items-center', {
        'space-x-3 md:space-x-4': size === 'base',
        'space-x-2 md:space-x-3': size === 'sm',
      })}
    >
      {variant === 'discreet' && (
        <span className="h-2 w-2 flex-none rounded-full bg-primary-700/50 p-[3px]">
          <Icons.FiledCircle className={cva} />
        </span>
      )}
      {variant === 'checked' && (
        <span className="h-4 w-4 flex-none rounded-full bg-primary-700/50 p-[3px]">
          <Icons.check className={cva} />
        </span>
      )}
      {variant === 'numeric' && (
        <span className="text-sm flex-none p-[8px]">
          {number}
        </span>
      )}
      <p
        className={cn('text-neutral-400', {
          'text-sm': size === 'sm',
        })}
      >
        {children}
      </p>
    </li>
  );
};
