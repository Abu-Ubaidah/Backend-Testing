import mongoose, { Schema } from "mongoose";
const browsing_historySchema = new mongoose.Schema({
    
},{timestamps: true});
export const Browsing_History = new mongoose.model("Browsing_History",browsing_historySchema)