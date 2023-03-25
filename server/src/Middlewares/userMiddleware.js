require("dotenv").config()
const jwt=require("jsonwebtoken")


async function userMiddleware(req,res,next){
    const user=jwt.verify(req.headers.token,process.env.PRIVATEKEY)
    if (user) {
        req.userid=user.id
        next()
    }
}


module.exports={userMiddleware}