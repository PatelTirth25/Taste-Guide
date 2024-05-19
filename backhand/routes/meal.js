import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import { User } from "../models/mealschema.js";
import { connectDB } from "../helper/mongo.js";

const router = express.Router()
router.use(cors())
router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.json());
connectDB();

router.get('/', async (req, res) => {
    try {
        let uuser = await User.find({})
        res.send(uuser)

    } catch (error) {
        console.log("Error in get request: ", error)
        res.send({
            success: false,
            message: "Error in get api!"
        })
    }
})

router.post('/', async (req, res) => {
    try {
        let d = req.body
        const newuser = new User({
            name: d.meal,
            food: d.food,
            id: d.id
        })
        await newuser.save()

        res.send({
            success: true,
            message: "New meal added!"
        })

    } catch (error) {
         console.log("Error in adding meal",error)

         res.json({
            success: false,
            message: "Error in Post api!"
         })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;

        const deluser = await User.findOne({ _id: `${id}` })
        await User.deleteOne({ _id: `${id}` })
        res.send({
            success: true,
            message: "Meal Deleted!"
        })

    } catch (error) {
        console.log("Error in Delete: ", error)
        res.send({
            success: false,
            message: "Error in delete api!"
        })
    }
})

export default router;