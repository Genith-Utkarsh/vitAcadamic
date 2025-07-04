import express from "express"
import { login,register } from "../controller/user.js"
 const userRoutes = express.Router()

userRoutes.post("/register",register)
userRoutes.post("/login",login)

export default userRoutes