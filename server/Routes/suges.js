import express from "express"
import { Feedback, sugestionData ,AllSugesion,getallfeedback} from "../controller/suggestion.js"

const suggroutes = express.Router()

suggroutes.post("/suggestion",sugestionData)
suggroutes.post("/Feedback",Feedback)
suggroutes.get("/AllSugesion",AllSugesion)
suggroutes.get("/getallfeedback",getallfeedback)

export default suggroutes