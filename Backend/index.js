import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongodb");
    }).catch((error)=>{
        console.log(error)
    })

const app = express()
app.listen(3001,()=>{
    console.log("server listening at port 3001");
})


