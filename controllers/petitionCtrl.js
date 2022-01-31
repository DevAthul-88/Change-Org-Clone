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
                supporters:{user:id , message:message},
                user:req.user._id
            })
            await petition.save()
            res.json({status:true})
         } catch (error) {
             res.json({error: error.message})
         }
    }
}