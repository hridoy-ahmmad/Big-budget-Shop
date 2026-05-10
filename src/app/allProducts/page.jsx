import Card from '@/components/Card';
import React from 'react';

const getData = async () => {
    const res = await fetch('http://localhost:3000/data.json', {
        cache: 'no-store'
    })
    return res.json()

}
const data = await getData()

const AllProducts = () => {
    return (
        <div>
            <p className="text-orange-500 font-bold uppercase mb-3 text-center my-10 text-3xl">
                All Products
            </p>
            <div className="grid grid-cols-4 container mx-auto gap-5 my-5">
                {
                    data.map(d =>
                        <Card key={d.id} d={d} />)
                }
            </div>
        </div>
    );
};

export default AllProducts;
