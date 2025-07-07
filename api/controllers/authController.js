import User from "../models/mongo/user.model.js"
import bcrypt from 'bcrypt'

const signup=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        console.log(req.body)
        const salt =await bcrypt.genSalt(10);
        const passwordHash=await bcrypt.hash(password,salt)
        const newUser=new User({
            username,
            email,
            password:passwordHash
        })
        const savedUser=await newUser.save();
        res.status(201).json(savedUser)
        // res.status(201).json({message:"user successfully registered"})
    }
    catch (error){
        res.status(500).json({error:error.message})
    }
}

const login=()=>{
    console.log("login required")
}

export default {signup, login}