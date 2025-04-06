import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import {
    HeartIcon,
    LogOut,
    Search,
    ShoppingBag,
    ShoppingCart,
    Star,
    User,
    XCircle,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '@/components/ui/badge';

const linkList = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Contact',
        href: '/',
    },
    {
        title: 'About',
        href: '/',
    },
    {
        title: 'Sign Up',
        href: '/',
    },
];

export const Header = () => (
    <header className="flex justify-center py-4 border-b">
        <div className="flex px-8 items-center justify-between space-x-4 w-full max-w-[1080px]">
            <div className="text-2xl font-bold">Exclusive</div>
            <div className={'grow flex justify-center'}>
                <NavigationMenu className={'flex-none'}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            {linkList.map((link, index) => (
                                <NavigationMenuLink
                                    key={index}
                                    asChild={true}
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link href={link.href}>{link.title}</Link>
                                </NavigationMenuLink>
                            ))}
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="relative flex-none w-56">
                <Input type="text" className="pl-8" placeholder="What are you looking for?" />
                <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            </div>

            <div className={'flex items-center'}>
                <Button size="icon" variant={'ghost'}>
                    <HeartIcon className={'opacity-50'} />
                </Button>

                <Button size="icon" variant={'ghost'} className={'relative'}>
                    <ShoppingCart className={'opacity-50'} />
                    <Badge className={'absolute bg-chart-1 -top-1 -right-2 min-w-4.5 py-0 px-1'}>
                        2
                    </Badge>
                </Button>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarFallback className={'bg-chart-1'}>
                            <User className={'text-white'} />
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={'end'} className={'bg-primary text-primary-foreground'}>
                    <DropdownMenuItem>
                        <User />
                        <span>Manage My Account</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <ShoppingBag />
                        <span>My Order</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <XCircle />
                        <span>My Cancellations</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Star />
                        <span>My Reviews</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <LogOut />
                        <span>Logout</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </header>
);
