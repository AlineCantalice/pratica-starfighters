import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter';
import handleErrorMiddleware from "./middlewares/handleErrorMiddleware";

dotenv.config();

const app = express();

app.use(cors());

app.use(userRouter)
app.use(handleErrorMiddleware)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
})