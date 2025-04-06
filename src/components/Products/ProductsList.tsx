import { getProductList } from '../../../dal/api';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EyeIcon, HeartIcon } from 'lucide-react';
import { Rating } from '@/components/Rating/Rating';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const ProductsList = async () => {
    const products = await getProductList();

    return (
        <>
            {products.map((product) => (
                <div className={'overflow-hidden w-56'} key={product.id}>
                    <Card className={'group relative bg-muted overflow-hidden aspect-square w-56'}>
                        <Link href={`/product/${product.slug}`}>
                            <picture>
                                <img
                                    className={
                                        'absolute inset-0 size-full object-contain p-4 group-hover:scale-110 transition-all duration-300'
                                    }
                                    src={product.image}
                                    alt={product.name}
                                />
                            </picture>
                        </Link>
                        {product.discountPrice && (
                            <Badge className={'absolute left-2 top-2 bg-green-500'}>Sale</Badge>
                        )}
                        <div className={'absolute flex flex-col right-2 top-2 gap-1'}>
                            <Button className={'rounded-full'} size={'icon'} variant={'outline'}>
                                <HeartIcon
                                    className={cn(
                                        product.liked === false && 'fill-red-500 text-red-500',
                                    )}
                                />
                            </Button>
                            <Button className={'rounded-full'} size={'icon'} variant={'outline'}>
                                <EyeIcon />
                            </Button>
                        </div>
                        <Button
                            className={
                                'bottom-0 rounded-none absolute w-full bg-primary text-primary-foreground transform translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0'
                            }
                        >
                            Add To Cart
                        </Button>
                    </Card>
                    <h3 className={'font-semibold truncate'}>{product.name}</h3>
                    <div className={'flex gap-1'}>
                        <Rating value={product.rating} />
                        <div>({product.reviewsCount})</div>
                    </div>
                    <div className={'flex gap-1 text-red-500'}>
                        <p
                            className={cn(
                                product.discountPrice && 'line-through text-muted-foreground',
                            )}
                        >
                            ${product.actualPrice}
                        </p>
                        {product.discountPrice && <p>${product.discountPrice}</p>}
                    </div>
                </div>
            ))}
        </>
    );
};
