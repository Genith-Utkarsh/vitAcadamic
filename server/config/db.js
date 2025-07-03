import mongoose from "mongoose"

export const dbConnection = async(url)=>{
  await mongoose.connect(url)
}