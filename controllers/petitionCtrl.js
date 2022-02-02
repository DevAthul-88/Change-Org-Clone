const { date } = require("joi");
const petitionSchema = require("../model/petitionModel");


module.exports = {
    create: async (req , res) => {
         try {
            console.log(req.body);
            const {message} = req.body;
            const id = req.user._id
            const petition = new petitionSchema({
                title: req.body.title,
                description:req.body.description,
                expectedVote:req.body.goal,
                category:req.body.category,
                supporters:{user:req.user.userName , id:id , message:message ,  createdAt:Date.now(),},
                user:{
                    userName:req.user.userName,
                    id:id,
                   
                }
            })
            await petition.save()
            res.json({status:true})
         } catch (error) {
             res.json({error: error.message})
         }
    },

    getPetitionByUser: async (req , res) => {
       try {
           const user = req.user._id
           const petition = await petitionSchema.find({'user.id':user})
           if(!petition) return res.json({message:"Nothing found"})
           
           res.json({data:petition})
       } catch (error) {
           res.json({error: error.message})
       }
    },
    getPetitionByDate: async (req , res) => {
    try {
        const petition = await petitionSchema.find().sort({createdAt:-1}).limit(20)
        if(!petition) return res.json({message: "Nothing found"})
        res.json({data: petition})
    } catch (error) {
        res.json({error: error.message})
    }
    },

    getPetitionById: async (req , res) => {
        try {
            const {id} = req.params
            const data = await petitionSchema.findById({_id: id});
            res.json(data)
        } catch (error) {
            res.json({error: error.message})
        }
    }
}