import connectMongoDb from "../config/mongoDb.js";
import Product from "../models/mongo/product.model.js";
import productData from '../data/product.data.json' with { type: "json" };
import { config } from "../config/env.js";

const importData = async () => {
  try {
    const conn = await connectMongoDb(config.MONGO_URI);
    
    const products = productData.products;
     await Product.deleteMany();
    const result = await Product.insertMany(products);
    console.log("product imported successfully");
    process.exit(0);
  } catch (error) {
    console.error("error importing data");
    process.exit(0);
  }
};

importData();
