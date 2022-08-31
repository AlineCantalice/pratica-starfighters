import { Router } from "express";
import * as userController from "../controllers/userController.js";
import validateUser from "../middlewares/userMiddleware.js";
import userSchema from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post('/battle', validateUser(userSchema), userController.battle)
userRouter.get('/ranking', userController.ranking)

export default userRouter;