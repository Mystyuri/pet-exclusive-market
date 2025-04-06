import { ProductsList } from '@/components/Products/ProductsList';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

const CardPreloader = () =>
    Array.from({ length: 8 }).map((_, key) => (
        <Skeleton key={key} className="w-56 h-80 rounded-md" />
    ));

export const Products = () => (
    <>
        <div className={'flex flex-wrap gap-4 justify-evenly'}>
            <Suspense fallback={<CardPreloader />}>
                <ProductsList />
            </Suspense>
        </div>
        <Button size={'lg'} className={'bg-chart-1 hover:bg-chart-1 hover:opacity-80'}>
            View All Products
        </Button>
    </>
);
