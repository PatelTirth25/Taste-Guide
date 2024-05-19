import { NextResponse } from 'next/server'
import { User } from '../../../../backhand/models/userschema';
import { connectDB } from '../../../../backhand/helper/mongo';
import { cookies } from 'next/headers';


connectDB()

export async function POST(request){
    let cookie=cookies()
    try {
        let cook=cookie
   
        let x=await request.json()
        let uuserdata= await User.findOne({email: x.email , password: x.password})
        if(uuserdata){
            cook.set("login",JSON.stringify(uuserdata),{httpOnly:true})
            return NextResponse.json({
                success: true,
                message: "Login Sucessful"
            })

        }
        else{
            return NextResponse.json({
                success: false,
                message: "User not found !"
            })
        }
    } catch (error) {
        console.log("Error in post api of login: ",error);
        return NextResponse.json({
            success: false,
            message: "Post api error"
        })
    }
}