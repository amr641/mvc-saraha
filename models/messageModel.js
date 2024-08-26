import { Schema, Types, model } from "mongoose";
import bcrypt from 'bcrypt'

const messageSchema = new Schema({
   user:{
    type:Types.ObjectId,
    ref:'User'
   },
   content:String

  
})
// userSchema.pre('save', function () {
//     this.password = bcrypt.hashSync(this.password, 8);
//     console.log(this);
//   })
export let Message= model('Message',messageSchema)