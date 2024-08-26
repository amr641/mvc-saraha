import { Router } from "express";

import { register, signup } from "../controller/register.controller.js";

 export const registerRouter= Router()
 registerRouter.get('/register',register).post('/handelRegister',signup)
