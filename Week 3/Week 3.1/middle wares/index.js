const express = require("express");
const app = express();


app.use(express.json()); // it a middleware that will we called everytime if it a GET/POST/... and it is always the first middleware  

function middleware1(req,res,next){
    const Email = req.headers.email;
    const Pass = req.headers.pass;
    console.log("Email:", Email);
    console.log("Pass:", Pass);
    if((Email !== "himanshu@singhal" || Pass !== "Himan")){
        res.send("Wrong Email or password");
        return;
    }
    else next();
}

app.get('/',middleware1,(req,res)=>{
    
    res.json({
        msg : "Done!"
    })
})

app.post('/',middleware1,(req,res)=>{
    
})

app.listen(3050,()=>{
    console.log("Hello");
    
});