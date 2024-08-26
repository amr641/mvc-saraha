import { Message } from "../models/messageModel.js";
import { User } from "../models/userModel.js";

const user = async (req, res) => {
  let url = `${req.protocol}://${req.get('host')}/user`

  let user = await User.findById(req.params.userId);
  res.render("user", { name: user.name,userId:user._id,url,session:req.session });
};
let logout =(req,res)=>{
  req.session.destroy()
  res.redirect('/login')
}
export { user,logout };
