import { Router } from "express";

import { logout, user } from "../controller/user.controller.js";

 export const userRouter= Router()
 userRouter.get('/user/:userId',user)
 userRouter.get('/logout',logout)

