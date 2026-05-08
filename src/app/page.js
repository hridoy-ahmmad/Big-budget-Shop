import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Tips from "@/components/Tips";
import Link from "next/link";


const getData = async () => {
  const res = await fetch('http://localhost:3000/data.json')
  return res.json()

}
 const data = await getData()

const products = data.slice(0, 4)

export default async function Home() {
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
