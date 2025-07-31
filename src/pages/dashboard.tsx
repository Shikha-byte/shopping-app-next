// pages/dashboard.tsx
import { useSelector } from 'react-redux';
import { selectAuthToken, selectAuthUser } from '@/features/auth/authSelectors';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { fetchProducts } from '@/services/productService';

export default function DashboardPage() {
  const token = useSelector(selectAuthToken);
  
  const router = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token]);
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

  return (
      <Layout>
     <h1 className="text-3xl font-bold text-blue-600 text-center mb-4">Welcome to MyShop</h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         {products.map((prod: any) => (
           <ProductCard key={prod.id} product={prod} />
         ))}
     </div>
    </Layout>
  );
}
