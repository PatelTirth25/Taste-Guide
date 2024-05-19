import mongoose from "mongoose";
import { Schema } from "mongoose";

const userschema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const User=mongoose.models.user || mongoose.model("user",userschema);