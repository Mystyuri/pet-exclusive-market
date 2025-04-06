'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon } from 'lucide-react';

export const Counter = () => {
    const [count, setCount] = useState(1);
    return (
        <div className={'flex'} onClick={() => {}}>
            <Button
                disabled={count === 1}
                size={'icon'}
                variant={'outline'}
                className={'rounded-r-none'}
                onClick={() => count > 1 && setCount(count - 1)}
            >
                <MinusIcon />
            </Button>
            <div className={'px-2 border-y border-border flex justify-center min-w-10'}>
                <div className={'self-center'}>{count}</div>
            </div>
            <Button
                variant={'outline'}
                className={'bg-chart-1 text-primary-foreground rounded-l-none'}
                size={'icon'}
                onClick={() => setCount(count + 1)}
            >
                <PlusIcon />
            </Button>
        </div>
    );
};
