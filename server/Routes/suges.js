import express from "express"
import { Feedback, sugestionData } from "../controller/suggestion.js"

const suggroutes = express.Router()

suggroutes.post("/suggestion",sugestionData)
suggroutes.post("/Feedback",Feedback)

export default suggroutes