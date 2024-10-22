const mongoose=require('mongoose');
const connectdb=async ()=>{
    try {
        const connect=await mongoose.connect("mongodb+srv://abhishekdhiman:Dhiman12345@cluster0.7qcwbpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/staticpage");
        console.log("Db connected successfully ");
    } catch (error) {
        console.log("Error Detected ")
    }
}
module.exports=connectdb;