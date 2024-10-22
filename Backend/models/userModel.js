const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    userName:{type:String,required:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,required:true},
    profilePicture:{type:String},
    recentActivities:{type:String},
},
 {timestamp:true})
 module.exports=mongoose.model("User",userSchema);