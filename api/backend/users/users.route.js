import {Router} from 'express';
import * as controller from './users.controller.js';
const userRouter = Router();

userRouter.get("/user/all",controller.getAllUser);
userRouter.get("/user/:id",controller.getAllUser);
userRouter.post("/user/create",controller.createUserById);
userRouter.put("/user/update/:id",controller.updateUserById);
userRouter.delete("/user/delete/:id",controller.deleteUserById);

export default userRouter;