import { Router } from "express";
import { home } from "../controller/home.controller.js";
// import { isLoggedIn } from "../middlewares/auth.js";

 export const homeRouter= Router()
 

 homeRouter.get('/',home)