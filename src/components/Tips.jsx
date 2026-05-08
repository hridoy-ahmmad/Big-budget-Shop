import React from 'react';

const Tips = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="text-orange-500 font-bold uppercase tracking-[4px] mb-3">
                        Summer Essentials
                    </p>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Summer Care Tips
                    </h2>

                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Follow these simple summer care tips to stay healthy, fresh, and energetic all season long.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                    {/* Tip 1 */}
                    <div className="bg-white rounded-3xl p-6 border border-orange-100 hover:shadow-xl transition-all duration-300">
                        <div className="text-4xl mb-5">💧</div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Stay Hydrated
                        </h3>

                        <p className="text-sm text-gray-500 leading-relaxed">
                            Drink plenty of water throughout the day to prevent dehydration and keep your body cool.
                        </p>
                    </div>

                    {/* Tip 2 */}
                    <div className="bg-white rounded-3xl p-6 border border-orange-100 hover:shadow-xl transition-all duration-300">
                        <div className="text-4xl mb-5">☀️</div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Apply Sunscreen
                        </h3>

                        <p className="text-sm text-gray-500 leading-relaxed">
                            Use sunscreen with SPF protection to protect your skin from harmful UV rays.
                        </p>
                    </div>

                    {/* Tip 3 */}
                    <div className="bg-white rounded-3xl p-6 border border-orange-100 hover:shadow-xl transition-all duration-300">
                        <div className="text-4xl mb-5">👕</div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Wear Light Clothes
                        </h3>

                        <p className="text-sm text-gray-500 leading-relaxed">
                            Choose light-colored and breathable fabrics like cotton to stay comfortable in hot weather.
                        </p>
                    </div>

                    {/* Tip 4 */}
                    <div className="bg-white rounded-3xl p-6 border border-orange-100 hover:shadow-xl transition-all duration-300">
                        <div className="text-4xl mb-5">🍉</div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Eat Fresh Fruits
                        </h3>

                        <p className="text-sm text-gray-500 leading-relaxed">
                            Seasonal fruits like watermelon and mango help maintain hydration and energy levels.
                        </p>
                    </div>

                    {/* Tip 5 */}
                    <div className="bg-white rounded-3xl p-6 border border-orange-100 hover:shadow-xl transition-all duration-300">
                        <div className="text-4xl mb-5">🧴</div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Keep Skin Moisturized
                        </h3>

                        <p className="text-sm text-gray-500 leading-relaxed">
                            Use moisturizer regularly to prevent dryness and keep your skin soft during summer days.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Tips;