import express from "express"
const app = express()
import dotenv from "dotenv";
import { dbConnection } from "./config/db.js";
import userRoutes from "./Routes/user.js";
import cors from "cors"
dotenv.config();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
const PORT = process.env.PORT || 6010
dbConnection(process.env.MONGODB).then(()=>{
    console.log("Mongodb is Connected")
}).catch((err)=>{
    console.log("ERROR",err)
})
app.use("/api",userRoutes)
app.listen(PORT,(req,res)=>{
    console.log( `server is runing on Port ${PORT}`)
})
