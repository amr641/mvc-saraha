import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    name:String,
    email:String,
    password:String,
    status:{
      type:String,
      enum:['online','offline'],
      default:"online"
    }

  
})
// userSchema.pre('save', function () {
//     this.password = bcrypt.hashSync(this.password, 8);
//     console.log(this);
//   })
export let User= model('User',userSchema)