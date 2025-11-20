import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true, // shoes, shirts, jeans etc.
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sizes: {
      type: [String], // ["S", "M", "L", "XL"]
      default: [],
    },
    image: {
      type: String,
      required: true,
    },
    inStock: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
