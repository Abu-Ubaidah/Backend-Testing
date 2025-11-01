import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    username:{
        type: String,
        unique: true,
        required:true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required:true,
    },
    phone:{
        type: Number,
        required: true,
    }
},{timestamps:true});

export const Users = mongoose.model("Users", usersSchema)