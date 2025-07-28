import express from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import cors from "cors"; // ✅ ADD THIS LINE
import {Book} from "./models/bookModel.js"
import booksRoute from "./routes/booksRoute.js"

const app=express();


//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//1:allow all origins with default of cors(*)
app.use(cors());
//2:allow custom origins
// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         method:['GET','POST','PUT','DELETE'],
//         allowedHeaders:["Content-Type"],
//     })
// )
app.use("/books",booksRoute);

app.get("/",(request,response)=>{
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack Tutorial");
});




mongoose.connect(mongoDBURL)
.then(()=>{
  console.log("App connected to database");
  app.listen(PORT,()=>{
    console.log(`App is listening to port: ${PORT}`);
});
}).catch((error)=>{
  console.log(error);
})

