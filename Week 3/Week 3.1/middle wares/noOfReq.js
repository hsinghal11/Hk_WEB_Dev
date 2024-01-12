const express = require('express');
const app=express();
app.use(express.json());

let n=0;
function countReq(req,res,next){
    n++;
    next();
}

app.get('/',countReq,(req,res)=>{
    console.log(n);
    res.json({
        msg : `${n} no. of req is sent`
    })
});

app.listen(3010,()=>{
    console.log({
        msg : "Server is running"
    });
    
})