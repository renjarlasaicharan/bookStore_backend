 import express from 'express';
 import mongoose from 'mongoose';
import { userRoute } from './routes/index.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json())

const connectDB = () => {
    try{
       const connect =  mongoose.connect('mongodb+srv://ramesh:ramesh@cluster0.c5fdyqo.mongodb.net/users')
       console.log(`mongo DB connected successfully`)
    }
    catch{
        console.log("failed")
    }
};

connectDB();
 app.use('/user', userRoute)

// app.use('/',(req,res)=>{
//     return res.json("userlist backend");
// })

app.listen(1234,() => {
    console.log("Hello World");
})