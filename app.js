import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import { test } from "./backend/controllers/zapatoscontrollers"

dotenv.connect()
mongoose.connect(process.urldb)

.then ( () =>{
    console.log("si jala we")
})

.catch = ((error)=>{
    console.log("no jala", error)
})

const app=express()
app.use(cors())
app.listen(100, ()=>{
    console.log("si se escucha we")
})

test(holi)