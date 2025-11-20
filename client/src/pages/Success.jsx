import { Link } from "react-router-dom";

const orderId = Math.floor(100000 + Math.random() * 900000);

const Success = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-28 pb-20 text-center min-h-screen">

      <img
        src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
        className="w-32 mx-auto mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for shopping with UrbanStyle.
      </p>

<p className="text-gray-700 mb-4">
  Your order number is <span className="font-semibold">#{orderId}</span>.
</p>
      <Link
        to="/products"
        className="bg-black text-yellow-400 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default Success;
