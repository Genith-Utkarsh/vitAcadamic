import mongoose from "mongoose"

const feedbackSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    branch:{
        type:String,
        rerquire:true
    },
    feedback:{
       type:String,
       require:true
    }
})

const feedback = mongoose.model("Feedback",feedbackSchema)

export default  feedback