"use client"
import React, { useState } from "react";

interface StarRatingProps {
    totalStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState<number>(0);
    return (
        <div className="flex gap-1 text-yellow-500 text-2xl">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        onClick={() => setRating(starValue)}
                        className={`cursor-pointer ${starValue <= rating ? "text-yellow-500" : "text-gray-400"
                            }`}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;