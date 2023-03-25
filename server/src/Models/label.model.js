const { Schema, model, default: mongoose } = require("mongoose");

const labelSchema=new Schema({
    name:{
        type:String,
    },
    board:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"brdboard"
    },
    card:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"brdcard"
    },
    comment:[
        {
            message:{
                type:String
            },
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"brduser"
            }
        }
    ],
    assign:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"brduser"
    },
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"brduser"
    }
})

const labelModel=model("brdlabel",labelSchema)

module.exports=labelModel