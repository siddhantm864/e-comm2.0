import mongoose, { Schema } from "mongoose";

const WishlistSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required:true
  },
  product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
    required:true
  }
  },
  {
    timestamps:true
  });

WishlistSchema.index({userId:1,product:1},{unique:true});

export default mongoose.model("Wishlist", WishlistSchema)
