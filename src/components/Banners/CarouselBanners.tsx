'use client';
import * as React from 'react';
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';

const imgs = [
    {
        href: 'https://avatars.mds.yandex.net/i?id=046591fb236dc92db5078857a64728b0_l-5274042-images-thumbs&n=13',
    },
    {
        href: 'https://www.iphones.ru/wp-content/uploads/2015/08/iPhone_Main-1240x580.jpg',
    },
    {
        href: 'https://cdn.shopify.com/s/files/1/1040/8564/files/Xr_banner.jpg',
    },
    {
        href: 'https://wylsa.com/wp-content/uploads/2024/12/iphone-17-pro-max-4.jpeg',
    },
    {
        href: 'https://avatars.mds.yandex.net/get-altay/754546/2a0000018d63cc71f9ab22c4ace6fb965189/XXXL',
    },
];

export function CarouselBanners() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="w-full h-fit  bg-amber-300">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                setApi={setApi}
                className="h-fit flex items-center"
            >
                <CarouselContent className={'h-80'}>
                    {imgs.map((img, index) => (
                        <CarouselItem key={index} className={'p-0'}>
                            <img className={'size-full object-cover'} src={img.href} alt={''} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className={'left-4'} />
                <CarouselNext className={'right-4'} />
                <div className="absolute bottom-4 mx-auto w-full flex items-center justify-center gap-2">
                    {Array.from({ length: count }).map((_, index) => (
                        <Button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={cn(
                                'size-2.5 p-0 rounded-full border-2 bg-muted opacity-80',
                                {
                                    'border-primary bg-chart-1': current === index + 1,
                                },
                            )}
                        />
                    ))}
                </div>
            </Carousel>
        </div>
    );
}
