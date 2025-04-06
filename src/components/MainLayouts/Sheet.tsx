'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import { ReactNode } from 'react';

export const SheetComponent = ({ children }: { children: ReactNode }) => (
    <Sheet>
        <SheetTrigger asChild>
            <Button size={'icon'} variant="outline" className={'sm:hidden'}>
                <AlignJustify />
            </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
            <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className={'px-4 flex flex-col'}>{children}</div>
        </SheetContent>
    </Sheet>
);
