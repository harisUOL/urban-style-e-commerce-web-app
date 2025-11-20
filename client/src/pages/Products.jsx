import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [sort, setSort] = useState("");
const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(9999);
const [size, setSize] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    fetch("http://http://3.89.186.55/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  let filteredProducts = category
  ? products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    )
  : products;

// SIZE FILTER
if (size) {
  filteredProducts = filteredProducts.filter((p) =>
    p.sizes?.includes(size)
  );
}

// PRICE FILTER
filteredProducts = filteredProducts.filter(
  (p) => p.price >= minPrice && p.price <= maxPrice
);

// SORTING
if (sort === "low-high") {
  filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
} else if (sort === "high-low") {
  filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
}

  return (
<div className="max-w-7xl mx-auto px-8 pt-28 pb-20 min-h-screen">

      {/* FILTER BAR */}
<div className="bg-white p-4 rounded-lg shadow mb-8 flex flex-wrap gap-4 items-center">

  {/* SORT */}
  <select
    onChange={(e) => setSort(e.target.value)}
    className="border px-3 py-2 rounded"
  >
    <option value="">Sort By</option>
    <option value="low-high">Price: Low to High</option>
    <option value="high-low">Price: High to Low</option>
  </select>

  {/* PRICE RANGE */}
  <input
    type="number"
    placeholder="Min Price"
    className="border px-3 py-2 rounded w-32"
    onChange={(e) => setMinPrice(Number(e.target.value))}
  />

  <input
    type="number"
    placeholder="Max Price"
    className="border px-3 py-2 rounded w-32"
    onChange={(e) => setMaxPrice(Number(e.target.value))}
  />

  {/* SIZE FILTER */}
  <select
    onChange={(e) => setSize(e.target.value)}
    className="border px-3 py-2 rounded"
  >
    <option value="">Size</option>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
  </select>
</div>

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {category
            ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products`
            : "All Products"}
        </h1>

        {category && (
          <p className="text-gray-600 mt-1">
            Showing items from <span className="font-semibold">{category}</span>
          </p>
        )}
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div
              key={i}
              className="animate-pulse bg-gray-200 h-64 rounded-lg"
            ></div>
          ))}
        </div>
      )}

      {/* Product Grid */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredProducts.map(product => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer border border-gray-200"
            >
              <Link to={`/product/${product._id}`}>
                <div className="relative w-full h-52 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition"
                  />

                  {/* Category Badge */}
                  <span className="absolute top-2 left-2 bg-black text-yellow-400 text-xs px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                <h3 className="mt-4 font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {product.description}
                </p>
              </Link>

              <div className="flex justify-between items-center mt-3">
                <p className="text-xl font-bold text-black">
                  ${product.price}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="bg-black text-yellow-400 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && filteredProducts.length === 0 && (
        <div className="text-center mt-16">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6614/6614677.png"
            className="w-40 mx-auto opacity-70"
          />
          <p className="text-gray-500 mt-4 text-lg">
            No products found for this category.
          </p>

          <a
            href="/products"
            className="inline-block mt-4 bg-black text-yellow-400 px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            View All Products
          </a>
        </div>
      )}
    </div>
  );
};

export default Products;
