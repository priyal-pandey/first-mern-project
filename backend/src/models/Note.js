import mongoose from "mongoose";

//1st step - You have to create a schema
//2nd step - You would create a model based off that schema

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true
    }
},
    { timestamps:true } //createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;