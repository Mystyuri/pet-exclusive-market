import CountdownTimer from '@/components/Banners/CountdownTimer';
import { Button } from '@/components/ui/button';

export const BannerCountdown = () => (
    <div className="p-8 space-y-4 relative h-fit z-1">
        <img
            className="absolute inset-0 size-full object-cover -z-1"
            src="https://crunchytech.com/wp-content/uploads/2023/12/commercial-sound-systems.png"
            alt="Background"
        />
        <h2 className="text-chart-2">Categories</h2>
        <div className="text-3xl text-primary-foreground">
            Enhance Your
            <br />
            Music Experience
        </div>
        <CountdownTimer />
        <Button size={'lg'} className="bg-chart-2 hover:bg-chart-2 hover:opacity-80">
            Buy Now!
        </Button>
    </div>
);
