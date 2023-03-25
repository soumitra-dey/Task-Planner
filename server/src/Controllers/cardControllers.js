const cardModel=require("../Models/card.model")


async function createcard(req,res){
    const {board,name}=req.body
    try{
        let dt=await cardModel.create({board,name})
        res.status(200).send(dt)
    }catch(e){
        res.status(404).send("Something went wrong")
    }
}

async function getallcard(req,res){
    const {board}=req.query
    try{
        let dt=await cardModel.find({board})
        res.status(200).send(dt)
    }catch(e){
        res.status(404).send("Something went wrong")
    }
}


async function deletecard(req,res){
    const {card}=req.query
    try{
        await cardModel.deleteOne({_id:card})
        res.status(200).send("Card deleted")
    }catch(e){
        res.status(404).send("Something went wrong")
    }
}



module.exports={createcard,getallcard,deletecard}