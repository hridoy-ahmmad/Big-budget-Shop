'use client'
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-orange-50 to-white px-4">

            <div className="text-center max-w-2xl">

                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-black text-orange-500 mb-4">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-5">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-4 flex-wrap">

                    <Link
                        href="/"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-2xl font-bold transition-all duration-300"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => history.back()}
                        className="border border-gray-300 hover:border-orange-400 hover:text-orange-500 px-7 py-3 rounded-2xl font-bold text-gray-700 transition-all duration-300"
                    >
                        Go Back
                    </button>

                </div>
            </div>
        </section>
    );
};

export default NotFound;