import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        

        const fixed = {
          ...data,
          _id: data._id || data.id || id,
        };

        setProduct(fixed);
      })
      .catch(err => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-8 pt-28">
        <p>Loading...</p>
      </div>
    );
  }

  return (
<div className="max-w-7xl mx-auto px-8 pt-28 pb-20 min-h-screen">

      <Link to="/products" className="underline text-gray-600">← Back</Link>

      <div className="flex flex-col md:flex-row gap-10 mt-6">
        
        {/* IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl border"
          />
        </div>

        {/* DETAILS */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-800">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          <button
            onClick={() => {
              console.log("Adding to cart:", product);
              addToCart(product);
            }}
            className="bg-black text-yellow-400 px-6 py-3 rounded-lg hover:bg-gray-800 transition w-max"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default SingleProduct;
