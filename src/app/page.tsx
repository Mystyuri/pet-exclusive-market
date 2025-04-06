import { CarouselBanners } from '@/components/Banners/CarouselBanners';
import { Separator } from '@/components/ui/separator';
import { BannerCountdown } from '@/components/Banners/BannerCountdown';
import { Products } from '@/components/Products/Products';
import { InfoTitle } from '@/components/InfoTitle/InfoTitle';
import { FeaturedBanners } from '@/components/Banners/FeaturedBanners';

export default function Home() {
    return (
        <>
            <CarouselBanners />
            <Separator />
            <BannerCountdown />
            <Separator />
            <InfoTitle title={'Our Products'} description={'Explore Our Products'} />
            <Products />
            <InfoTitle title={'Featured'} description={'New Arrival'} />
            <FeaturedBanners />
        </>
    );
}
