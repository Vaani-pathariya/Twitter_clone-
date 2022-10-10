const express=require('express');
const bodyParser =require ('body-parser');
const cors=require('cors');
const mongoose =require('mongoose');
const userModel=require ("./models");
const app=express();
const port = 3001;
app.use (cors());
mongoose.connect('',{
    useNewUrlParser :true,
    useUnifiedTopology: true
});
const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error: "));
db.once ("open",function (){
    console.log("Connected successfully");
});
app.use (bodyParser.urlencoded({extended:false}));
app.use (bodyParser.json());
app.get('/details',async (req,res)=>{
    const user=await userModel.find({});
    res.send(user);
});
app.listen(port,()=>console.log(`Hello from port ${port}!`))
