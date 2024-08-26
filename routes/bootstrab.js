import { homeRouter } from "./home.routes.js"
import { loginRouter } from "./login.routes.js"
import { messageRouter } from "./mesages.routes.js"
import { registerRouter } from "./register.routes.js"
import { userRouter } from "./user.routes.js"

export const bootstrab= function(app){
    app.use('/',homeRouter)
    app.use('/',loginRouter)
    app.use('/',registerRouter)
    app.use('/',messageRouter)
    app.use('/',userRouter)
}