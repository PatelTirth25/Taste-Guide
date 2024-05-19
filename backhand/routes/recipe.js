import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import { User } from "../models/recipeschema.js";
import { connectDB } from "../helper/mongo.js";

const router = express.Router()
router.use(cors())
router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.json());
connectDB();

router.get('/', async (req, res) => {
    try {
        
        const users = await User.find({});

        res.send(users)


    } catch (error) {
        console.error("Error while handling GET request:", error);
        res.send({
            success: false,
            message: "Error in get api!"
        })
    }})

router.delete('/:id',async (req,res)=>{
    try {
        let id=req.params.id

        let users= await User.findOne({_id:`${id}`})
        
        await User.deleteOne({_id:`${id}`});

        res.send({
            success: true,
            message: "Recipe Deleted!"
        })
        
    } catch (error) {
        console.error("Error while handling GET request:", error);
        res.send({
            success: false,
            message: "Error in delete api!"
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const { recipename, ingrediant , id } = req.body;
        console.log(req.body)
    
        console.log(req.body)
        const newUser = new User({
            name: recipename,
            ingre: ingrediant,
            id: id
        });
        
        const savedUser = await newUser.save();
    
        
        res.json({
            success: true,
            message: "New recipe added!"
        })
    } catch (error) {
        console.error("Error while handling POST request:", error);
        res.json({
            success: false,
            message: "Error in post api!"
        })
    }
})

export default router;