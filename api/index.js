import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoute from "./route/user.route.js"
import authRoute from "./route/auth.route.js"

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(console.log("Mongodb is connected to the database"))
.catch(err=>{
    // console.log(err);
})



const app = express();

app.listen(3001, ()=>{
    console.log("server is running on port 3001");
});


app.use('/api/user', userRoute);
app.use("/api/auth", authRoute)
