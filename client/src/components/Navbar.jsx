import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="w-full bg-black fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />

          <div className="flex items-center">
            <span className="text-white text-xl font-bold">Urban</span>
            <span className="text-yellow-400 text-xl font-bold ml-1">
              Style
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-yellow-400">
          <li className="hover:text-white">
            <Link to="/">Home</Link>
          </li>

          {/* DropDown */}
          <li className="hover:text-white">
            <Link to="/categories">Categories</Link>
          </li>

          <li className="hover:text-white">
            <Link to="/products">Products</Link>
          </li>
        </ul>

        {/* RIGHT: CART BUTTON */}
        <div className="hidden md:flex">
          <Link
            to="/cart"
            className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded hover:bg-yellow-500 transition flex items-center gap-2"
          >
            Cart 🛒
            {cartCount > 0 && (
              <span className="bg-black text-yellow-400 px-2 py-0.5 rounded text-sm">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="text-yellow-400 md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black text-yellow-400 px-6 py-4 flex flex-col gap-4">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/products" className="hover:text-white">
            Products
          </Link>

          <div>
            <p className="font-semibold mb-2">Categories</p>
            <Link
              to="/products?category=shirts"
              className="block hover:text-white"
            >
              Shirts
            </Link>
            <Link
              to="/products?category=jeans"
              className="block hover:text-white"
            >
              Jeans
            </Link>
            <Link
              to="/products?category=shoes"
              className="block hover:text-white"
            >
              Shoes
            </Link>
            <Link
              to="/products?category=jackets"
              className="block hover:text-white"
            >
              Jackets
            </Link>
          </div>

          <Link to="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link to="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link to="/cart" className="hover:text-white">
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
