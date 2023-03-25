const { Schema, model, default: mongoose } = require("mongoose");

const boardSchema=new Schema({
    name:{
        type:String,
    },
    color:{
        type:String
    },
    users:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"brduser"
            }
        ]
    }
})

const boardModel=model("brdboard",boardSchema)

module.exports=boardModel