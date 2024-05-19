import mongoose from "mongoose";
import { Schema } from "mongoose";

const mealschema = new Schema({
    name: {
        type: String,
        required: [true, "name if required"],
    },
    food: {
        type: String,
        required: [true, "ingrediant is required"],
    },
    
    id: {
        type: String,
        required: [true, "user id required"]
    }
})

export const User = mongoose.models.meals || mongoose.model("meals", mealschema);
