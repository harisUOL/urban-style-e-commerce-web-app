import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const [couponMsg, setCouponMsg] = useState("");

    const applyCoupon = () => {
  if (coupon === "URBAN10") {
    setDiscount(0.1);
    setCouponMsg("Coupon Applied: 10% OFF");
  } else if (coupon === "URBAN20") {
    setDiscount(0.2);
    setCouponMsg("Coupon Applied: 20% OFF");
  } else {
    setDiscount(0);
    setCouponMsg("Invalid Coupon Code");
  }
};
        
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
const finalTotal = total - total * discount;

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake processing delay
    setTimeout(() => {
      clearCart();
      navigate("/success");
    }, 800);
  };

  

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-8 pt-28 pb-20 min-h-screen text-center">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 pt-28 pb-20 min-h-screen flex flex-col md:flex-row gap-12">

      {/* LEFT — FORM */}
      <div className="flex-1 bg-white shadow-md p-6 rounded-xl border">
        <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="border rounded px-4 py-2"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="border rounded px-4 py-2"
          />

          <textarea
            name="address"
            placeholder="Street Address"
            onChange={handleChange}
            required
            className="border rounded px-4 py-2"
          ></textarea>

          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            required
            className="border rounded px-4 py-2"
          />

          <input
            name="country"
            placeholder="Country"
            onChange={handleChange}
            required
            className="border rounded px-4 py-2"
          />

          {/* PAYMENT SECTION */}
<div className="mt-10">
  <h2 className="text-2xl font-bold mb-4">Payment Details</h2>

  <div className="flex flex-col gap-4">
    <input
      placeholder="Cardholder Name"
      className="border rounded px-4 py-2"
      required
    />

    <input
      placeholder="Card Number (Fake)"
      maxLength={16}
      className="border rounded px-4 py-2"
      required
    />

    <div className="flex gap-4">
      <input
        placeholder="MM/YY"
        className="border rounded px-4 py-2 w-1/2"
        required
      />
      <input
        placeholder="CVV"
        maxLength={3}
        className="border rounded px-4 py-2 w-1/2"
        required
      />
    </div>
  </div>
</div>

{/* COUPON */}
<div className="mt-6">
  <h3 className="font-semibold mb-2">Have a Coupon?</h3>
  <div className="flex gap-2">
    <input
      placeholder="Enter Coupon Code"
      className="border px-3 py-2 rounded flex-1"
      onChange={(e) => setCoupon(e.target.value)}
    />
    <button
      onClick={applyCoupon}
      className="bg-black text-yellow-400 px-4 py-2 rounded hover:bg-gray-800"
    >
      Apply
    </button>
  </div>
  {couponMsg && <p className="text-sm mt-1 text-gray-600">{couponMsg}</p>}
</div>
          <button
            type="submit"
            className="bg-black text-yellow-400 py-3 rounded-lg hover:bg-gray-800 transition mt-4"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* RIGHT — ORDER SUMMARY */}
      <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-xl shadow-md h-max">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

        <div className="flex flex-col gap-4">

          {cart.map((item) => (
            <div key={item._id} className="flex justify-between">
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between mt-4 text-lg">
  <span>Discount:</span>
  <span className="text-green-600">-${(total * discount).toFixed(2)}</span>
</div>

<div className="flex justify-between text-xl font-bold mt-4">
  <span>Final Total:</span>
  <span>${finalTotal.toFixed(2)}</span>
</div>
        </div>

      </div>

    </div>
  );
};

export default Checkout;
