// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import emailRoute from "./routes/email.route.js";

dotenv.config({});
connectDB();
const PORT = 8080;
const app = express();

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin:'http://localhost:5173',
  Credentials:true
}
app.use(cors(corsOptions));

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/email", emailRoute);
// "http://localhost:8080/api/v1/user/register"
// "http://localhost:8080/api/v1/user/login"


// API calling
// app.get("/home",(req,res)=>{
//   return res.status(200).json({message:"I am coming from backend",success:true});
// })

app.listen(PORT,()=>{
  console.log(`Server running at port ${PORT}`)
});