import express from "express"
import { Login } from "../controller/user.js"
 const userRoutes = express.Router()

userRoutes.post("/register",Login)

export default userRoutes