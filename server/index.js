import express from "express";
import dotenv from "dotenv";
//database connection
import ConnectDB from "./database/connection"
dotenv.config()

const zomato=express();

zomato.use(express.json());

zomato.get('/',(req,res)=>{
    res.json({
        message:"Server is running"
    })
})
const PORT=4000
zomato.listen(PORT,()=>{
    ConnectDB()
    .then(()=>{
        console.log("server is running !!!")
    })
    .catch(()=>{
        console.log("server is running but data base connection failed...")
        console.log(error)  
    })
})