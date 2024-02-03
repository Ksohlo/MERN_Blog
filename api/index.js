import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRoutes from "./route/auth.route.js"
import userRoutes from './route/user.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(console.log("Mongodb is connected to the database"))
.catch(err=>{
    // console.log(err);
})

const app = express();
app.use(express.json())

app.listen(3001, () => {
    console.log('server is connected on port 3001');
});

app.get('/api/test', (req, res) => {
    res.json({message:"welcome"});
})
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);



// -----MIDDLEWARE
app.use((error, req, res, next)=>{
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something went wrong";
    res.status(errorStatus).json({
        success:false, 
        statusCode : errorStatus, 
        message : errorMessage,
    });
});