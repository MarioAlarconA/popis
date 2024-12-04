import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import { test } from "./backend/controllers/zapatoscontrollers.js"

dotenv.config()
mongoose.connect(process.env.urldb)

.then ( () =>{
    console.log("si jala we")
})

.catch = ((error)=>{
    console.log("no jala", error)
})

const app=express()
app.use(cors())
app.listen(4000, ()=>{
    console.log("si se escucha we")
})

test()