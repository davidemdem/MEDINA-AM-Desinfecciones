const path= require('path');

const express=require('express');
const app=express();

app.get('/login',function(req,res){
    res.send('LOGIN/login.html')}
)


app.listen(3000)