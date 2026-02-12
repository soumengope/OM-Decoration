import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const cors  = require('cors');
const cookieParser = require('cookie-parser');
import connectDB from './models/connect';
import usersRouter from './routers/usersRouter';

connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin:'http://localhost:3000',
  credentials:true
}));

app.use('/users', usersRouter);

app.get('/', (req, res)=>{
    res.send('Hello World');
});

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})