const labelmodel=require("../Models/label.model")


async function createlabel(req,res){
    const {name,board,card}=req.body
    try{
        await labelmodel.create({name,board,card})
        res.status(200).send("Label created")
    }catch(e){
        res.status(404).send("Something went wrong")
    }
}

async function getalllabel(req,res){
    const {board}=req.query
    try{
        let dt=await labelModel.find({board})
        console.log(dt)
        res.status(200).send(dt)
    }catch(e){
        res.status(404).send("Something went wrong")
    }
}







module.exports={createlabel, getalllabel}