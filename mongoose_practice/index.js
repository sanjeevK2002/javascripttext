import express from "express";
import { connectDB } from "./src/database/database.js";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send(`server is running on ${PORT} port`)
})

connectDB()
.then(()=>{
    app.listen(PORT , ()=>{
        console.log("Server is running on :- " ,PORT);
        
    })
    
}).catch((err)=>{
    console.log("Database cannot be successful");
    
})

