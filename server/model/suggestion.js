import mongoose from "mongoose"

const suggestionSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        rerquire:true
    },
    suggestions:{
       type:String,
       require:true
    }
})

const suggestion = mongoose.model("Suggestion",suggestionSchema)

export default  suggestion