const products: BannerComponent[] = [
    {
        src: 'https://avatars.mds.yandex.net/i?id=682f8e70bafc668600daa8e876be9795_l-5247581-images-thumbs&n=13',
        title: 'PlayStation 5',
        description: 'Black and White version of the PS5\ncoming out on sale.',
    },
    {
        src: 'https://avatars.mds.yandex.net/get-altay/1886165/2a0000016e9cf8994fbdd8b15d7b50081075/orig',
        title: "Women's Collections",
        description: 'Featured woman collections that give you another vibe.',
    },
    {
        src: 'https://avatars.dzeninfra.ru/get-zen_doc/3524532/pub_5f22a223fcc9586a4d11cca0_5f22a4e817a2c87c3078449f/scale_1200',
        title: 'Speakers',
        description: 'Amazon wireless speakers',
    },
    {
        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/cfd25c62004157.5a81b390904d7.jpg',
        title: 'GUCCI',
        description: 'Intense Oud',
    },
];

type BannerComponent = {
    src: string;
    title: string;
    description: string;
};

const BannerComponent = ({ title, description, src }: BannerComponent) => (
    <div className="relative size-full group overflow-hidden">
        <img src={src} alt={title} className="absolute inset-0 size-full object-cover" />
        <div className="absolute bottom-0 left-0 bg-opacity-50 p-4 text-white">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm whitespace-pre-line">{description}</p>
            <a href="#" className="mt-2 inline-block font-semibold">
                Shop Now
            </a>
        </div>
    </div>
);

export const FeaturedBanners = () => (
    <div
        className="flex flex-col sm:grid gap-4 sm:h-96"
        style={{
            gridTemplateAreas: `"A A A B B B B"
                                "A A A C C D D"`,
        }}
    >
        {products.map((product, index) => {
            const area = ['A', 'B', 'C', 'D'][index % 4];
            return (
                <div key={product.src} style={{ gridArea: area }} className={'h-48 sm:h-auto'}>
                    <BannerComponent
                        title={product.title}
                        description={product.description}
                        src={product.src}
                    />
                </div>
            );
        })}
    </div>
);
