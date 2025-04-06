import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, SendHorizontal, Twitter } from 'lucide-react';

export const Footer = () => (
    <footer className="flex justify-center bg-foreground text-primary-foreground py-10">
        <div className="w-full max-w-[1080px] [&_p]:text-gray-400 [&>div]:space-y-4 [&_h2]:font-bold px-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div>
                <h2 className={'!text-xl'}>Exclusive</h2>
                <p>
                    Subscribe
                    <br />
                    Get 10% off your first order
                </p>
                <div className="relative">
                    <Input type="email" placeholder="Enter your email" />
                    <Button
                        variant={'ghost'}
                        size={'icon'}
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                    >
                        <SendHorizontal />
                    </Button>
                </div>
            </div>

            <div>
                <h2>Support</h2>
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+ 88015-88888-9999</p>
            </div>

            <div>
                <h2>Account</h2>
                <div className="space-y-1">
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
            </div>

            <div>
                <h2>Quick Link</h2>
                <div className="space-y-1">
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
            </div>

            <div>
                <h2>Download App</h2>
                <p>Save $3 with App New User Only</p>
                <img
                    src="https://manuals.plus/wp-content/uploads/2023/08/hombli-Smart-Pathway-Light-fig14.png"
                    alt="Google Play"
                    className="w-full max-w-48"
                />
                <div className="flex space-x-2">
                    <Button size={'icon'}>
                        <Facebook />
                    </Button>
                    <Button size={'icon'}>
                        <Twitter />
                    </Button>
                    <Button size={'icon'}>
                        <Instagram />
                    </Button>
                    <Button size={'icon'}>
                        <Linkedin />
                    </Button>
                </div>
            </div>
        </div>
    </footer>
);
