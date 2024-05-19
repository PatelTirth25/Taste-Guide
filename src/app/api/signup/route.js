import { NextResponse } from 'next/server'
import { User } from '../../../../backhand/models/userschema';
import { connectDB } from '../../../../backhand/helper/mongo';

connectDB()

export async function POST(req){
    try {
        let x=await req.json()
    let testuser=await User.findOne({email:x.email})
    
    if(!testuser){
        let newuser= new User({
            name: x.name,
            email: x.email,
            password: x.password
        })
        await newuser.save()
        return NextResponse.json({
            success: true,
            message: "New User Added!"
        })

    }
    else{

        return NextResponse.json({
            success: false,
            message: "Already User Exist!"
        })
    }
    } catch (error) {
        console.log("Error in Post request: ",error)
        return NextResponse.json({
            success: false,
            message: "Error in post request!"
        })
    }
}