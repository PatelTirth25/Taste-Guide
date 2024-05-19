import mongoose from "mongoose";
import { Schema } from "mongoose";

const recipeschema = new Schema({
    name: {
        type: String,
        required: [true,"name if required"],
    },
    ingre: {
        type: String,
        required: [true,"ingrediant is required"],
    },
    
    id : {
        type: String,
        required:[true,"user id required"]
    }
})

export const User=mongoose.models.recipes || mongoose.model("recipes",recipeschema);