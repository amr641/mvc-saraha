import { User } from "../models/userModel.js";

const register= (req,res)=>{
    res.render('register',{error:req.query.error,session:null})
}
const signup=async (req,res)=>{
    let userExist = await User.findOne({email:req.body.email})
    if(userExist){ 
          return res.redirect('/register?error=email is already exist')
    }
await User.create(req.body)
res.redirect('/login')

}

export {register,signup}