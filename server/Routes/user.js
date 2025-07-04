import express from "express"
import { login,register,checkauth,Logout } from "../controller/user.js"
 const userRoutes = express.Router()

userRoutes.post("/register",register)
userRoutes.post("/login",login)
userRoutes.get("/checkauth",checkauth)
userRoutes.get("/Logout",Logout)

export default userRoutes