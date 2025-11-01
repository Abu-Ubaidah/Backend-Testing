import mongoose from "mongoose";
const categoriesSchema = new mongoose.Schema({
    ammount: {
        type: Number,
        required: true,
    },
    paymentMethod:{
        type: String,
        required:true,
    },
    transactionDate:{
        type: String,
        required:true,
    },

}, {timestamps:true});
export const Categories = mongoose.model("Categories", categoriesSchema)