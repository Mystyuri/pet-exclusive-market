'use client';

import { useEffect, useState } from 'react';

const CountdownTimer = () => {
    const getFutureDate = () => {
        const date = new Date();
        date.setDate(date.getDate() + 2);
        return date.toISOString();
    };

    const calculateTimeLeft = (targetDate: string) => {
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [targetDate] = useState(getFutureDate());
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex space-x-2">
            {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="flex flex-col items-center">
                    <div className="size-14 flex items-center justify-center rounded-full bg-secondary text-primary text-xl font-bold">
                        {value}
                    </div>
                    <span className="text-sm text-gray-500">{label}</span>
                </div>
            ))}
        </div>
    );
};

export default CountdownTimer;
