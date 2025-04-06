import { PropsWithChildren } from 'react';

export const Main = (props: PropsWithChildren) => (
    <main className="flex flex-col gap-8 px-4 w-full max-w-[1080px] justify-self-center">
        {props.children}
    </main>
);
