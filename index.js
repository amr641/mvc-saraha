import express from 'express'
import dbConn from './config/dbConfig.js';
import { bootstrab } from './routes/bootstrab.js';
import session from 'express-session';
import mongoSession from 'connect-mongodb-session'
import cors from 'cors'
const app = express()
let MongoDBStore= mongoSession(session)
let store = new MongoDBStore({
  uri: "mongodb://localhost:27017/mvc-saraha",
  collection: 'mySessions'
});
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
  }))
  app.use(cors())
  
const port = process.env.PORT||3000
app.use(express.urlencoded({extended:true}))
app.use('/public',express.static('public'))
app.set('view engine',"ejs")
bootstrab(app)
app.listen(port, () => console.log(`server listening on port ${port}...`))