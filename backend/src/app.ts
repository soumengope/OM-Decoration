import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import {connectDB} from './models/connect';

const app = express();
app.use(express.json());

connectDB();

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})