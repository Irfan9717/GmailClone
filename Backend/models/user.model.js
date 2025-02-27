import mongoose, { trusted } from "mongoose";

const userSchema = new mongoose.Schema({
  fullname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  profilePhote:{
    type:String,
    required:true
  }
},{timestamps:true});
export const User = mongoose.model("User",userSchema);