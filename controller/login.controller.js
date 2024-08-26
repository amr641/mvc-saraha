import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
const showLogin = (req, res) => {
  res.render("login", { error: req.query.error, session: null });
};
const logIn = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || req.body.password !== user.password) {
    return res.redirect("/login?error=incorrect email or password ");
  }
  user.status = "online";
  await user.save();
  var hour = 3600000;
  req.session.cookie.expires = new Date(Date.now() + hour);
  req.session.cookie.maxAge = hour;
  req.session.isLoggedIn = true;
  req.session.userName = user.name;
  req.session.userId = user._id;
  res.redirect(`/messages`);
};
export { showLogin, logIn };
