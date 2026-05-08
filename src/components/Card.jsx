import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ d }) => {
    return (
        <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 flex flex-col">

            {/* Product Image */}
            <div className="relative bg-gray-50 h-56 overflow-hidden">

                {/* Category */}
                <span className="absolute top-4 left-4 z-20 bg-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 shadow">
                    {d.category}
                </span>

                <Image
                    src={d.image}
                    alt={d.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 relative"
                />
                {/* <div className='absolute inset-0 bg-black/40'></div> */}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">

                {/* Name + Rating */}
                <div className="flex items-start justify-between gap-3 mb-2">

                    <h2 className="font-extrabold text-gray-900 group-hover:text-indigo-600 transition">
                        {d.name}
                    </h2>

                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg shrink-0">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm font-bold text-yellow-700">
                            {d.rating}
                        </span>
                    </div>
                </div>


                {/* Bottom */}
                <div className="flex items-center justify-between mt-auto">

                    {/* Price */}
                    <div>
                        <p className="text-gray-400 text-xs line-through">
                            ${(d.price + 40).toFixed(2)}
                        </p>

                        <h3 className="text-2xl font-black text-gray-900">
                            ${d.price}
                        </h3>
                    </div>

                    {/* Button */}
                    <Link href={`/details/${d.id}`} className="flex items-center gap-2  px-2 py-1 rounded-md transition-all active:scale-95 bg-gray-200 border border-gray-300">
                        Details
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default Card;