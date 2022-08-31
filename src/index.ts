import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(userRouter)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
})