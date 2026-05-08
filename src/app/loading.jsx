import React from 'react';
const SkeletonCard = () => (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden h-full animate-pulse">
        {/* Image Skeleton */}
        <div className="aspect-square bg-gray-200" />

        <div className="p-5 space-y-4">
            {/* Title & Rating Skeleton */}
            <div className="flex justify-between">
                <div className="h-5 bg-gray-200 rounded-md w-2/3" />
                <div className="h-5 bg-gray-200 rounded-md w-10" />
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />
            </div>

            {/* Price & Button Skeleton */}
            <div className="flex justify-between items-center pt-4">
                <div className="space-y-1">
                    <div className="h-2 bg-gray-100 rounded w-10" />
                    <div className="h-8 bg-gray-200 rounded w-16" />
                </div>
                <div className="h-12 w-12 bg-gray-200 rounded-xl" />
            </div>
        </div>
    </div>
);
const loading = () => {
    return (
        <div>
            <main className="min-h-screen bg-white">
                {/* Hero Skeleton */}
                <div className="w-full h-[85vh] bg-gray-100 animate-pulse flex items-center px-6">
                    <div className="max-w-7xl mx-auto w-full space-y-6">
                        <div className="h-4 bg-gray-200 rounded-full w-32" />
                        <div className="h-20 bg-gray-200 rounded-lg w-3/4 md:w-1/2" />
                        <div className="h-6 bg-gray-200 rounded-md w-2/3 md:w-1/3" />
                        <div className="flex gap-4 pt-4">
                            <div className="h-14 w-40 bg-gray-200 rounded-full" />
                            <div className="h-14 w-40 bg-gray-200 rounded-full border-2 border-gray-100" />
                        </div>
                    </div>
                </div>
                {/* Product Grid Skeleton */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="h-10 bg-gray-200 rounded-md w-48 mb-10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(3)].map((_, i) => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default loading;