import { Leaf, RotateCcw, ShieldCheck, Truck } from 'lucide-react';
import React from 'react';

const Features = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Secure Payment */}
                    <div className="flex items-center gap-6 p-8 bg-white border border-gray-200 rounded-md hover:border-amber-400 transition duration-300 ">
                        <ShieldCheck size={32} className="text-orange-500" />
                        <div>
                            <h3 className="font-black text-sm tracking-widest uppercase text-gray-900">Secure Payment</h3>
                            <p className="text-gray-400 text-sm">100% encryption on all transactions.</p>
                        </div>
                    </div>

                    {/* Free Shipping */}
                    <div className="flex items-center gap-6 p-8 bg-white border border-gray-200 rounded-md hover:border-amber-400 transition duration-300 ">
                        <Truck size={32} className="text-orange-500" />
                        <div>
                            <h3 className="font-black text-sm tracking-widest uppercase text-gray-900">Free Shipping</h3>
                            <p className="text-gray-400 text-sm">On all orders above $50.</p>
                        </div>
                    </div>

                    {/* Easy Returns */}
                    <div className="flex items-center gap-6 p-8 bg-white border border-gray-200 rounded-md hover:border-amber-400 transition duration-300 ">
                        <RotateCcw size={32} className="text-orange-500" />
                        <div>
                            <h3 className="font-black text-sm tracking-widest uppercase text-gray-900">Easy Returns</h3>
                            <p className="text-gray-400 text-sm">30-day no-questions-asked policy.</p>
                        </div>
                    </div>

                    {/* Eco-Friendly */}
                    <div className="flex items-center gap-6 p-8 bg-white border border-gray-200 rounded-md hover:border-amber-400 transition duration-300 ">
                        <Leaf size={32} className="text-orange-500" />
                        <div>
                            <h3 className="font-black text-sm tracking-widest uppercase text-gray-900">Eco-Friendly</h3>
                            <p className="text-gray-400 text-sm">Sustainably sourced materials.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Features;