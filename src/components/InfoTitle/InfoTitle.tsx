type InfoTitleProps = {
    title: string;
    description: string;
};
export const InfoTitle = ({ title, description }: InfoTitleProps) => (
    <div className={'flex flex-col gap-2'}>
        <div className={'text-chart-1 flex flex-row items-center gap-2'}>
            <div className={'bg-chart-1 h-8 w-4 rounded'} />
            <div>{title}</div>
        </div>
        <h2 className={'text-2xl font-semibold'}>{description}</h2>
    </div>
);
