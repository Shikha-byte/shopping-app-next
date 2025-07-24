export const fetchProducts = async () =>{
    const res = await fetch("https://fakestoreapi.com/products");
    if(!res.ok){
        throw new Error("Failed to fetch new Product")
    }
    return res.json()
}

export const fetchProductById = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};