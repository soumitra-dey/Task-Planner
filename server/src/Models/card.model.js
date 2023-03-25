const { Schema, model, default: mongoose } = require("mongoose");

const cardSchema=new Schema({
    name:{
        type:String,
    },
    board:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"brdboard"
    },
    // comment:[
    //     {
    //         message:{
    //             type:String
    //         },
    //         user:{
    //             type:mongoose.Schema.Types.ObjectId,
    //             ref:"brduser"
    //         }
    //     }
    // ],
    // assign:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"brduser"
    // },
    // owner: {
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"brduser"
    // }
})

const cardModel=model("brdcard",cardSchema)

module.exports=cardModel