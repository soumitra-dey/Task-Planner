const { Schema, model } = require("mongoose");

const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String
    },
    avatar:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
    }
})

const userModel=model("brduser",userSchema)

module.exports=userModel