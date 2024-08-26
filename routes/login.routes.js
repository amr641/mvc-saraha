import { Router } from "express";

import { logIn, showLogin } from "../controller/login.controller.js";

export const loginRouter = Router();
loginRouter.get("/login", showLogin).post("/handleLogin", logIn);
