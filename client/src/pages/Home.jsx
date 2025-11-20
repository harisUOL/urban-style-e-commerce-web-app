import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH FEATURED PRODUCTS (top 6)
  useEffect(() => {
  fetch("/api/products")
    .then(res => res.json())
    .then(data => {
      setProducts(data.slice(-6));   // <-- last 6 products
      setLoading(false);
    });
}, []);

  return (
<div className="max-w-7xl mx-auto px-8 pt-28 pb-20 min-h-screen">

      {/* HERO SECTION */}
<section className="relative w-full px-6 md:px-12 py-24 flex flex-col md:flex-row items-center justify-between">

  {/* Decorative Glow */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-200/20 to-transparent blur-3xl opacity-60"></div>

  {/* LEFT CONTENT */}
  <div className="flex flex-col gap-6 max-w-xl animate-fadeIn">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
      Step Into  
      <br />
      <span className="text-yellow-500"> Urban Style</span>  
      <br />
      Wear Your Vibe.
    </h1>

    <p className="text-gray-700 text-lg">
      Discover premium streetwear picks designed for bold looks and everyday comfort.
    </p>

    <div className="flex gap-4 mt-2">
      <Link
        to="/products"
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition font-semibold shadow-md"
      >
        Shop Now
      </Link>

      <Link
        to="/cart"
        className="border border-yellow-400 text-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition font-semibold shadow-md"
      >
        View Cart
      </Link>
    </div>
  </div>

  {/* RIGHT IMAGE / FLOATING CARD */}
  <div className="relative mt-12 md:mt-0 group animate-slideInRight">
    <div className="absolute inset-0 rounded-xl shadow-2xl bg-yellow-300/10 blur-2xl group-hover:blur-xl transition"></div>

    <img
      src="/Hero.jpg"
      alt="Urban Fashion"
      className="relative w-[380px] md:w-[420px] rounded-xl shadow-xl transform group-hover:-translate-y-2 transition"
    />
  </div>

</section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="px-12 mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Featured Products
        </h2>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-200 animate-pulse h-64 rounded-lg" />
            ))}
          </div>
        )}

        {/* Product grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <Link
      to={`/product/${product._id}`} // upgrade later: `/product/${product._id}`
      className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />

      <h3 className="mt-3 font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>

      <button
  onClick={() => addToCart(product)}
  className="mt-2 bg-black text-yellow-400 px-4 py-2 rounded hover:bg-gray-800 transition"
>
  Add to Cart
</button>
    </Link>
  );
};

export default Home;
