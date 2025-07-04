import suggestion from "../model/suggestion.js";
import feedback from "../model/feedback.js";
export const sugestionData = async(req,res)=>{
   try {
     const {email,name,suggestions} = req.body
     await suggestion.create({
        name,
        email,
        suggestions
     })
     res.json({
        success:true,
        message:"suggestion send Successfull!"
     })
   } catch (error) {
    console.log(error)
   }
}

export const Feedback = async(req,res)=>{
   try {
     const {name,branch,feedbacks} = req.body
     await feedback.create({
        name,
        branch,
        feedbacks
     })
     res.json({
        success:true,
        message:"feedback send Successfull!"
     })
   } catch (error) {
    console.log(error)
   }
}