import mongoose from "mongoose";


const connectMongoDb=async(URI)=>{
    try{
        if(!URI){
            throw new Error("mongoURI is not defined");
        }
        const conn=await mongoose.connect(URI);
        console.log(`Database successfully connected!!!! ${conn.connection.host}`)
    } catch(error){
        console.error("MongoDB connection Failed")
        process.exit(1)
    }
}

export default connectMongoDb