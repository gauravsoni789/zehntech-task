var express=require("express");
var app=express();
var cors=require("cors");

var routes=require("./config/routes");

app.use(cors());
app.use(routes);

app.listen(3000,()=>{
    console.log("FinalApi Server is Running.....+++++")
})