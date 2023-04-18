const express= require("express");
const bodyparser= require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})




app.listen(3000,()=>{
    console.log("server started at port 3000");
})