
require('dotenv').config()
const express= require('express');
const app= express();
const port=4000;

app.get('/',(req,res)=>{
    res.send("kya be kya ho rha h");
})

app.listen(process.env.PORT,()=>{
    console.log(`succesfully compiled with port ${port}`)
})