"use server"
import mongoose from "mongoose"
import dotenv from 'dotenv';

// Configure dotenv
dotenv.config();

export const connectDB = async ()=>{
    await mongoose.connect(process.env.URI,{dbName: "recipe_manager"});
    console.log("Database connected... recipe_manager")
}
