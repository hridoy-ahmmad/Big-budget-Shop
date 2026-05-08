
import React from 'react';

const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/hero.jpeg')",
            }}
            className="bg-cover bg-center h-56 md:h-96 w-full relative"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full flex-col gap-5">
                <h1 className="text-white text-3xl md:text-5xl italic text-center px-4 font-bold">
                    SUMMER SALE 50% OFF
                </h1>
                <h1 className="text-white text-3xl md:text-7xl italic text-center px-4 font-bold">
                    hot deal 🔥
                </h1>
            
            </div>
        </div>
    );
};

export default Hero;