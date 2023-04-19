import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

// ClassNames
import cn from "classnames";

const badgeVariants = cva(
  "inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
        secondary:
          "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive:
          "bg-destructive hover:bg-secondary/80 border-transparent text-destructive-foreground",
        outline: "text-foreground",
        gradient: '',
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <>
        {
            variant !== 'gradient' ?
            <div className={cn(badgeVariants({ variant }), className)} {...props} />
            : <div className={cn("badge-gradient", className)}>
                <div className={cn("flex h-fit px-2.5 rounded-full py-0.5 text-xs font-semibold w-full items-center justify-center bg-white bg-opacity-90 back")} {...props} />
            </div>
        }
    </>
  )
}

export { Badge, badgeVariants }
