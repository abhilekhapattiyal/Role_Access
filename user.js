import mongoose, { mongo, trusted } from 'mongoose'
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        uniques:true
    },
    role:{
        type:String,
        enum:['admin',"user"],
        default:"user"},
    password:{
        type:String,
        required:true
    }
    
},{timestamps:true})
const UserModel=mongoose.model('user',userschema)
export default UserModel
