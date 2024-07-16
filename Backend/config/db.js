import mongoose from "mongoose";

 export const connectDB=async ()=>{
     await mongoose.connect("mongodb+srv://shruti:shruti09dec@cluster0.hl42elw.mongodb.net/grocery-del")
.then(()=>console.log("DB connected"))
}