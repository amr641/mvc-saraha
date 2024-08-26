import { Message } from "../models/messageModel.js"

const messages= async(req,res)=>{
    if(req.session.isLoggedIn){
        let url = `${req.protocol}://${req.get('host')}/user`
        let messages =await Message.find({user:req.session.userId})
        res.render('messages',{session:req.session,messages,url})
    }else{
        res.redirect('/login')
    }
}
const sendMessage= async(req,res)=>{
    req.body.user= req.params.userId
     await Message.create(req.body)
    res.redirect('/user/'+req.params.userId)
}
export {messages,sendMessage}