import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className={'h-full flex flex-col gap-4 items-center justify-center'}>
            <h1 className={'text-2xl font-semibold'}>404 Not Found</h1>
            <p>Your visited page not found. You may go home page.</p>
            <Button variant={'destructive'}>
                <Link href="/">Back to home page</Link>
            </Button>
        </div>
    );
}
