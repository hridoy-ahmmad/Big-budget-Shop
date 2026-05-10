"use client"
import Features from '@/components/Features';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

// const getData = async () => {
//     const res = await fetch('http://localhost:3000/data.json', {
//         cache: 'no-store'
//     })
//     return res.json()

// }
const data = await getData()

const Details = () => {
    const { id } = useParams()
    const foundedData = data.find(item => item.id === Number(id))
    console.log(foundedData);

    return (
        <div>
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
                {/* Left: Image */}
                <div className="border border-gray-200 rounded-3xl p-10 flex items-center justify-center">
                    <Image
                        src={foundedData.image}
                        alt={foundedData.name}
                        height={800}
                        width={800}
                        title={foundedData.name}
                        className="max-h-125 object-contain hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Right: Info */}
                <div className="flex flex-col justify-center">
                    <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                        {foundedData.category}
                    </span>
                    <h1 className="text-xl font-black text-gray-900 mb-6 uppercase">
                        {foundedData.name}
                    </h1>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-3xl font-bold text-gray-900">${foundedData.price}</span>
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-bold">
                            ★ {foundedData.rating}
                        </span>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        This premium {foundedData.name} is part of our limited summer collection.
                        Perfectly crafted for those who value both style and functionality.
                    </p>
                    <button className="bg-gray-900 text-white py-5 rounded-full font-bold text-xl hover:bg-orange-600 transition-colors shadow-xl active:scale-95">
                        Add to Cart — ${foundedData.price}
                    </button>
                    <Features />
                </div>
            </div>
        </div>
    );
};

export default Details;
