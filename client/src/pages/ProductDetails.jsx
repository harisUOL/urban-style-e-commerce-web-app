import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://http://3.89.186.55/api/products${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div className="text-center pt-28">Loading...</div>;

  return (
<div className="max-w-7xl mx-auto px-8 pt-28 pb-20 min-h-screen">
      <div className="flex flex-col md:flex-row items-center gap-12">

        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-96 rounded shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-yellow-500 mb-4">
            ${product.price}
          </p>

          <button className="bg-black text-yellow-400 px-6 py-3 rounded hover:bg-gray-800">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
