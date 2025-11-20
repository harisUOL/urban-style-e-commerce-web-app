import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-8 pt-28 pb-20 min-h-screen">

      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {/* Empty State */}
      {cart.length === 0 && (
        <div className="text-center mt-16">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7175/7175678.png"
            className="w-40 mx-auto opacity-80"
          />
          <p className="text-gray-600 mt-4">Your cart is currently empty.</p>

          <Link
            to="/products"
            className="inline-block mt-6 bg-black text-yellow-400 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Browse Products
          </Link>
        </div>
      )}

      {/* Cart List */}
      {cart.length > 0 && (
        <div className="flex flex-col md:flex-row gap-10">

          {/* LEFT SECTION: ITEMS */}
          <div className="flex-1 flex flex-col gap-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 border"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded object-cover"
                />

                {/* DETAILS */}
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>

                  {/* Quantity Buttons */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQty(item._id, item.quantity - 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>

                    <span className="font-semibold">{item.quantity}</span>

                    <button
                      onClick={() => updateQty(item._id, item.quantity + 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SECTION: SUMMARY */}
          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-xl shadow-md h-max">

            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-3 text-lg">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-6 text-lg">
              <span>Shipping:</span>
              <span className="text-green-600">FREE</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between mb-6 text-xl font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link
              to="/checkout"
              className="block text-center bg-black text-yellow-400 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </Link>

            <button
              onClick={clearCart}
              className="w-full mt-3 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Clear Cart
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
