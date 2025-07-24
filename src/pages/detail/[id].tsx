import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { fetchProductById } from "@/services/productService";

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetchProductById(id as string)
        .then((data) => setProduct(data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  if (!product) return <Layout><p>Loading...</p></Layout>;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-4 flex flex-col md:flex-row gap-6">
        {/* Images */}
        <div className="flex-1">
          <img src={product.image} alt={product.title} className="w-full max-h-[400px] object-contain rounded-lg" />
          {/* Simulated additional images */}
          <div className="flex mt-4 gap-2">
            {[...Array(3)].map((_, i) => (
              <img key={i} src={product.image} alt="thumb" className="w-20 h-20 object-contain border rounded" />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>

          <div className="flex items-center gap-2">
            <p className="font-semibold">Available Sizes:</p>
            {["S", "M", "L", "XL"].map((size) => (
              <span key={size} className="w-8 h-8 border rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100">{size}</span>
            ))}
          </div>

          <p className="text-xl text-blue-600 font-bold">${product.price.toFixed(2)}</p>

          {/* Add to Cart can go here later */}
        </div>
      </div>
    </Layout>
  );
}
