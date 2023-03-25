const boardModel=require("../Models/board.model")

async function createboard(req,res){
    const {name,color}=req.body
    try{
        let users=[req.userid]
        let board=await boardModel.create({name,color,users})
        res.status(200).send(board.id)
    }catch(e){
        res.status(404).send("Something went wrong")
    }
}

async function showboard(req,res){
    const {boardid}=req.query
    try{
        let board=await boardModel.findOne({_id:boardid}).populate({path:"users",select:"name email avatar _id"})
        res.status(200).send(board)
    }catch(e){
        res.status(404).send("Something went wrong")
    }
}

async function getallboard(req,res){
    try{
        let board=await boardModel.find({users:{$all:[req.userid]}})
        res.status(200).send(board)
    }catch(e){
        res.status(404).send("Something went wrong")
    }
}


async function deleteboard(req,res){
    const {id}=req.query
    try{
        let board=await boardModel.deleteOne({_id:id})
        res.status(200).send("Board deleted")
    } catch(e){
        res.status(404).send("Something went wrong")
    }
}

// async function getboard(req,res){
//     const {id}=req.query
//     try{
//         let board=await boardModel.findOne({_id:id})
//         res.status(200).send(board)
//     } catch(e){
//         res.status(404).send("Something went wrong")
//     }
// }



module.exports={createboard,showboard,getallboard,deleteboard}

