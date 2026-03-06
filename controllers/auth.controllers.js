import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signUp = async (req,res)=>{
    try {
        const {firstName,lastName,email,password,userName} = req.body

        if(!firstName || !lastName || !email || !password || !userName){
            return res.status(400).json({message:"Please fill all the fields."})
        }

        let existUser = await User.findOne({email})
        if(existUser){
            return res.status(400).json({message:"User already exist"})
        }

        const hashedpassword = await bcrypt.hash(password,10)
        
        const user = await User.create({
            firstName,
            lastName,
            email,
            password:hashedpassword,
            userName
        })

        return res.status(201).json({user:{
            firstName,
            lastName,
            email,
            userName
        }})


        
    } catch (error) {
        console.error("Signup error:", error)
        return res.status(500).json({message:"Internal server error"})
        
    }
}
