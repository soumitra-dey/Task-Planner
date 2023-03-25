const express=require("express")
const {signup,login, getuser}=require("../Controllers/userController")
const { userMiddleware } = require("../Middlewares/userMiddleware")

const app=express.Router()


app.post("/signup",signup)

app.post("/login",login)

app.get("/userdata",userMiddleware,getuser)


module.exports=app
