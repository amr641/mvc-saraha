import { Router } from "express";

import { messages } from "../controller/messages.controller.js";
import { sendMessage } from "../controller/messages.controller.js";

// import { isLoggedIn } from "../middlewares/auth.js";

 export const messageRouter= Router()
 messageRouter
 .get('/messages',messages)
 
 
 messageRouter.post('/sendMessage/:userId',sendMessage)
