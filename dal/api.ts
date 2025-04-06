import axios from 'axios';
import { fetchImageAsBase64 } from '@/lib/fetchImageAsBase64';
import { unstable_cache } from 'next/cache';

export const $host = axios.create({
    baseURL: 'https://665c3c1b3e4ac90a04d9021e.mockapi.io',
});

type ResponseGetProductList = Array<{
    id: string; // id продукта, строка
    name: string; // название продукта
    slug: string; // уникальный идентификатор продукта для URL
    rating: number; // рейтинг от 1 до 10
    actualPrice: number; // реальная цена
    discountPrice: number | null; // цена со скидкой, может быть null, если скидки нет
    image: string; // ссылка на изображение товара
    reviewsCount: number; // количество отзывов
    liked?: boolean; // флаг, указывающий, понравился ли товар (опционально)
}>;

export const getProductList = unstable_cache(
    async () => {
        const { data } = await $host.get<ResponseGetProductList>('/products');
        const convertedData = await Promise.all(
            data.map(async (product) => ({
                ...product,
                image: await fetchImageAsBase64(product.image),
            })),
        );
        return convertedData;
    },
    ['getProductList'],
    { revalidate: 10 },
);
