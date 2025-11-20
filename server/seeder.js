import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";
import products from "./data/products.js";

dotenv.config();

const seedProducts = async () => {
  try {
    await connectDB();

    console.log("Clearing old products...");
    await Product.deleteMany();

    console.log("Inserting new products...");
    await Product.insertMany(products);

    console.log("Products Seeded Successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();

