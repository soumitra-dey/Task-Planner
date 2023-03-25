const userModel=require("../Models/user.model")
const jwt=require("jsonwebtoken")
require("dotenv").config();


async function signup(req,res){
    const {email,password,name}=req.body
    console.log(email,password,name)
    try{
        const user=await userModel.findOne({email})
        if (user) {
            res.status(404).send("You are a register user")
        } else {
            await userModel.create({email,password,name})
            return res.status(200).send("User Created")
        }
    }catch(e){
        return res.status(400).send(e.message)
    }
}



async function login(req,res){
    const {email,password}=req.body
    try{
        const user=await userModel.findOne({email})
        if (user){
            if (user.password==password) {
                let token=jwt.sign({email,name:user.name,id:user._id},process.env.PRIVATEKEY)
                res.status(200).send({message:"Login Successful",token})
            } else {
                res.status(402).send("Wrong password")
            }
        } else {
            res.status(402).send("You are not a register user")
        }
    }catch(e){
        return res.status(400).send(e.message)
    }
}

async function getuser(req,res){
    try{
        let user=await userModel.findOne({_id:req.userid})
        res.status(200).send({name:user.name,email:user.email,avatar:user.avatar})
    }catch(e){
        res.status(402).send("Something went wrong")
    }
}


module.exports={signup,login,getuser}