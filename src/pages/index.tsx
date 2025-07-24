import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
//import { products } from "@/data/products";
import { fetchProducts } from "@/services/productService";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const load = async () =>{
      try{
        const data = await fetchProducts()
        setProducts(data)
      }catch(error){
        console.error(error)
      }
    }
    load();
  },[])
  //console.log(products)
  return (
   <Layout>
    <h1 className="text-3xl font-bold text-blue-600 text-center">Welcome to MyShop</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((prod: any) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
    </div>
   </Layout>
  )
}