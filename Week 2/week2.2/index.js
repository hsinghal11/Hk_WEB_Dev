const express = require("express");
const bodyParser =  require("body-parser");
const path = require("path");
const port = 3000;
const app = express();

//middleware
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    // console.log(req.headers);
    console.log(req.body);
    res.send("Hello world");
});

app.listen(port,()=>{});