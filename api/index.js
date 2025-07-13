import express from 'express';
import connectMongoDb from './config/mongoDb.js';
import cors from "cors"
import authRoute from "./routes/auth.routes.js"
import productRoute from "./routes/product.routes.js"
import { config } from './config/env.js';

const app = express();
app.use(express.json())
app.use(cors());

connectMongoDb(config.MONGO_URI);

const PORT = config.PORT;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

app.get("/",(req,res)=>{
    res.send("app is running...")
})

app.use("/api/auth",authRoute)
app.use("/api/products",productRoute)