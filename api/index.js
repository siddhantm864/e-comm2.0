import dotenv from 'dotenv';
import express from 'express';
import connectMongoDb from './db/mongoDb.js';
import cors from "cors"
import authRoute from "./routes/auth.routes.js"
import productRoute from "./routes/product.routes.js"
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());

const URI= process.env.MONGO_URI
connectMongoDb(URI);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

app.get("/",(req,res)=>{
    res.send("app is running...")
})

app.use("/api/auth",authRoute)
app.use("/api/products",productRoute)