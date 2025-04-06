import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Rating } from '@/components/Rating/Rating';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Counter } from '@/components/Counter/Counter';
import { HeartIcon, RefreshCcw, Truck } from 'lucide-react';

const imgsProduct = [
    { src: 'https://ir-3.ozone.ru/s3/multimedia-c/wc1000/6380846568.jpg', alt: 'A' },
    { src: 'https://ir-3.ozone.ru/s3/multimedia-b/wc1000/6380846567.jpg', alt: 'B' },
    { src: 'https://ir-3.ozone.ru/s3/multimedia-e/wc1000/6380846570.jpg', alt: 'C' },
    { src: 'https://ir-3.ozone.ru/s3/multimedia-d/wc1000/6380846569.jpg', alt: 'D' },
    { src: 'https://ir-3.ozone.ru/s3/multimedia-c/wc1000/6380846568.jpg', alt: 'E' },
];

export default function Product() {
    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div
                className="grid gap-2 grow grid-cols-[repeat(auto-fill,_minmax(120px,_auto))] flex-none"
                style={{
                    gridTemplateAreas: `"A E E E E"
                                        "B E E E E"
                                        "C E E E E"
                                        "D E E E E"`,
                }}
            >
                {imgsProduct.map((img, i) => (
                    <Card
                        key={i}
                        className={'w-full aspect-square relative'}
                        style={{ gridArea: img.alt }}
                    >
                        <picture>
                            <img
                                className={'absolute p-2 inset-0 size-full object-contain'}
                                src={img.src}
                                alt={img.alt}
                            />
                        </picture>
                    </Card>
                ))}
            </div>

            <div className="flex flex-col flex-initial gap-4">
                <h2 className="text-xl font-bold">Havic HV G-92 Gamepad</h2>
                <div className={'flex gap-2 text-sm items-center'}>
                    <Rating value={7} />
                    <div className={'text-muted-foreground'}>(150 Reviews)</div>
                    <div className={'text-muted-foreground'}>|</div>
                    <div className={'text-green-500'}>In Stock</div>
                </div>
                <p className="text-lg font-semibold">$192.00</p>
                <p className="text-sm text-muted-foreground">
                    PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for
                    easy bubble free install & mess free removal.
                </p>
                <div className={'flex gap-2 items-center'}>
                    <div>Colours:</div>
                    <div>
                        <ToggleGroup variant={'outline'} type="single" className={'text-white'}>
                            <ToggleGroupItem
                                value="red"
                                className={'bg-red-500 rounded-full size-4'}
                            ></ToggleGroupItem>
                            <ToggleGroupItem
                                value="white"
                                className={'bg-gray-300 rounded-full size-4'}
                            ></ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </div>

                <div className={'flex gap-2 items-center'}>
                    <div>Size:</div>
                    <div>
                        <ToggleGroup type="single" size={'lg'}>
                            <ToggleGroupItem value="xs">XS</ToggleGroupItem>
                            <ToggleGroupItem value="s">S</ToggleGroupItem>
                            <ToggleGroupItem value="m">M</ToggleGroupItem>
                            <ToggleGroupItem value="l">L</ToggleGroupItem>
                            <ToggleGroupItem value="xl">XL</ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Counter />
                    <Button className="bg-red-500 text-white">Buy Now</Button>
                    <Button variant={'outline'} size={'icon'}>
                        <HeartIcon />
                    </Button>
                </div>

                <div className={'border border-border divide-y'}>
                    <div className={'flex gap-4 p-4 items-center'}>
                        <Truck />
                        <div>
                            <p className={'text-sm'}>Free Delivery</p>
                            <p className={'text-xs'}>
                                <u>Enter your postal code for Delivery Availability</u>
                            </p>
                        </div>
                    </div>
                    <div className={'flex gap-4 p-4 items-center'}>
                        <RefreshCcw />
                        <div>
                            <p className={'text-sm'}>Return Delivery</p>
                            <p className={'text-xs'}>
                                Free 30 Days Delivery Returns. <u>Details</u>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
