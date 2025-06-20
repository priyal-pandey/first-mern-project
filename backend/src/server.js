//const express = require("express");
import express from "express"; //to use this, "type":"module" in package.json
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()

//middleware
if(process.env.NODE_ENV !== "production"){
app.use(cors({
    origin:"http://localhost:5173"
}
));
}

app.use(express.json());//for parsing json bodies: req.body

//our own custom middleware
// app.use((req,res,next) =>{
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
})
}

connectDB().then(() =>{
    app.listen(PORT, () => {
    console.log("Server started on PORT:",PORT);
});
});
