import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Tips from "@/components/Tips";
import { getData } from "@/lib/data";
import Link from "next/link";




export default async function Home() {
  const data = await getData()
  const products = data.slice(0, 4)
  return (
    <div >
      <Hero />
      <div className="grid grid-cols-4 container mx-auto gap-5 my-5">
        {
          products.map(d =>
            <Card key={d.id} d={d} />)
        }
      </div>
      <div className="flex justify-center">
        <Link href={'/allProducts'} className=" py-2 px-3 bg-amber-200 rounded-md shadow-md hover:scale-102 mb-10"> All Products</Link>
      </div>
      <Tips />
    </div>
  );
}
