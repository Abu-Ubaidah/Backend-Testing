import mongoose, { Types } from "mongoose";

const subTodoScheme = new mongoose.Schema({
    complete: {
        type: String,
        required: true
    },
    complete:{
        type: Boolean,
        default: false

    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})

export const SubTodo = mongoose.model("SubTodo", subTodoScheme)