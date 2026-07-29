import mongoose from 'mongoose';
const dbconnection = async()=>{
try{
   const response = await mongoose.connect(process.env);
   console.log("database connected successfully");
}
catch(error){
    console.log("not able to connect to the database"); 
    process.exit(1);

}}

export default dbconnection;