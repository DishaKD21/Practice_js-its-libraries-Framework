import express from "express";
import cors from 'cors';
import userRouter from "./users/users.route.js";
//import dbconnection from "./db";

const app = express();
const port= 5000;
app.use(cors());
app.use(express.json());
//dbconnection();

app.use("/api",userRouter);

app.listen(port,()=>{
console.log(`server is running on port ${port}`);
})

export default app;