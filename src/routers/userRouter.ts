import { Router } from "express";
import * as userController from "../controllers/userController";
import validateUser from "../middlewares/userMiddleware";
import userSchema from "../schemas/userSchema";

const userRouter = Router();

userRouter.post('/battle', validateUser(userSchema), userController.battle)
userRouter.get('/ranking', userController.ranking)

export default userRouter;