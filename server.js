
const express=require('express');
const fs= require('fs');
const app=express();


app.get ("/home.html" , (req , res ) => {
    fs.readFile("./homepage.html" ,"utf-8", (err, data) =>{
        err ? res.end ("FILE NOT FOUND")  && console.error ( err) : res.send(data) ; 
    } );

}) ;

app.get ("/services.html"  , (req , res ) => {
    fs.readFile("./homepage.html" ,"utf-8", (err, data) =>{
        err ? res.end ("FILE NOT FOUND")  && console.error ( err) : res.send(data) ; 
    } );

}) ;

app.get ("/contactus" , (req , res ) => {
    fs.readFile("./homepage.html" ,"utf-8", (err, data) =>{
        err ? res.end ("FILE NOT FOUND")  && console.error ( err) : res.send(data) ; 
    } );
})


const PORT=5000 
app.listen (PORT,()=> console.log("my server is running on port :" ,PORT))