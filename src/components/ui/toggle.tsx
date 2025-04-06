'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const toggleVariants = cva(
    "inline-flex items-center border border-border hover:border-ring justify-center gap-2 ring-gray-400 rounded-md hover:ring-1 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:ring-2 data-[state=on]:border-ring data-[state=on]:text-primary-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
    {
        variants: {
            variant: {
                default: 'data-[state=on]:bg-chart-1',
                outline: '',
            },
            size: {
                default: 'p-1',
                sm: '',
                lg: 'p-2',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

function Toggle({
    className,
    variant,
    size,
    ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
    return (
        <TogglePrimitive.Root
            data-slot="toggle"
            className={cn(toggleVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Toggle, toggleVariants };
