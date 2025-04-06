import { Star, StarHalfIcon } from 'lucide-react';

type RatingProps = {
    value: number; // Оценка (0-5, поддерживает дробные числа)
    max?: number; // Максимальное количество звезд (по умолчанию 5)
};

export const Rating = ({ value, max = 5 }: RatingProps) => {
    return (
        <div className="flex space-x-1">
            {[...Array(max)].map((_, i) => {
                const full = i + 1 <= value * 0.5;
                const half = i + 0.5 === value * 0.5; // Половинка (можно доработать)

                return (
                    <span key={i} className="relative">
                        {full ? (
                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                        ) : half ? (
                            <Star className="text-gray-300" size={24}>
                                <StarHalfIcon
                                    className="text-yellow-400 fill-yellow-400"
                                    size={24}
                                />
                            </Star>
                        ) : (
                            <Star className="text-gray-300" size={24} />
                        )}
                    </span>
                );
            })}
        </div>
    );
};
