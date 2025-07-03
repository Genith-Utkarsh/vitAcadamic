import express from "express"
const app = express()
import dotenv from "dotenv";
import { dbConnection } from "./config/db.js";
dotenv.config();

const PORT = process.env.PORT || 6010
dbConnection(process.env.MONGODB).then(()=>{
    console.log("Mongodb is Connected")
}).catch((err)=>{
    console.log("ERROR",err)
})
app.listen(PORT,(req,res)=>{
    console.log( `server is runing on Port ${PORT}`)
})
