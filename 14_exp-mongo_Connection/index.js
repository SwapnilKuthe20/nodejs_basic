import express from "express";
import mongoose from "mongoose";

const app = express();
mongoose.connect('mongodb+srv://swapnilkuthe20:h34x3xBGLIhJYSh8@cluster0.fxlat.mongodb.net/',
    {
        dbName: "NodeJS express API Series"
    })
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("Error Occured", error))

const port = 3300;
app.listen(port, (req, res) => {
    console.log("Expess server is running..");
})

