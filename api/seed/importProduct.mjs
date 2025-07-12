import dotenv from 'dotenv';
dotenv.config();

import connectMongoDb from "../db/mongoDb.js";
import Product from "../models/mongo/product.model.js";
import productData from '../data/product.data.json' with { type: "json" };

const URI= process.env.MONGO_URI

console.log('Data type:', typeof productData.products);
console.log('Is array:', Array.isArray(productData.products));
console.log('Length:', productData.products?.length);

const importData = async () => {
  try {
    console.log("Attempting to connect to database...",URI);
    const conn = await connectMongoDb(URI);
    console.log("Connection result:", conn);
    console.log("Connection type:", typeof conn);
    
    const products = productData.products;
    console.log("About to insert products...");
    
    const result = await Product.insertMany(products);
    console.log("product imported successfully");
    process.exit(0);
  } catch (error) {
    console.error("error importing data");
    process.exit(0);
  }
};

importData();
