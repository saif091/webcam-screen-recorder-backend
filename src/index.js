import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import {userRouter} from './routes/users.js'


const app = express();


app.use(express.json());
app.use(cors({origin:["https://mern-recorder.onrender.com/"]}));

app.use("/auth",userRouter);

mongoose.connect("mongodb+srv://saifmalik:authmern@cluster0.ug33avx.mongodb.net/?retryWrites=true&w=majority")





app.listen(4001,()=>console.log("server is running on port 4001"))
