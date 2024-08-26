import { User } from "../models/userModel.js"

// export const isLoggedIn=async (req,res,next)=>{
//     let user= await User.findById(req.cookie?.userId)
//     console.log(req.get('cookie'));
//     if(!user) return res.redirect('/login')
//     if(user.status=='online') return next()
//     res.redirect('/login')
// }
