const express = require("express");
const app = express();
const port = 3000;
var users= [{
    firstname : "John",
    kidneys:[{
        healthy : false 
    },{
        healthy : true
    }]
}]
var n =users[0]['kidneys'].length;
app.use(express.json());
app.get('/',(req,res)=>{
    const johnKideny = users[0].kidneys;
    const noOfKidneys = users[0].kidneys.length;
    const healthyKidneys = johnKideny.filter((kidneys)=>kidneys.healthy);
    let noOfHealthyKidneys = healthyKidneys.length;
    let noOfUnHealthyKidneys= noOfKidneys-noOfHealthyKidneys;
    // console.log(noOfKidneys,noOfHealthyKidneys,noOfUnHealthyKidneys,johnKideny);
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnHealthyKidneys
    })

});

app.post('/',(req,res)=>{
       const isHealthy = req.body.isHealthy;
       users[0].kidneys.push({
        healthy : isHealthy
       })
       res.json({
        msg : "done"  
       })
});

app.put('/',(req,res)=>{
    let allHealthyKidneys = users[0].kidneys.map(kidneys => {
        return {healthy : true}
    })
    users[0].kidneys = allHealthyKidneys;
    res.sendStatus(200);
});

app.delete('/',(req,res)=>{
    if(checkIfallKidneysHealthy()){
        let onlyHealthyKidneys = users[0].kidneys.filter(kidneys => kidneys.healthy )
        users[0].kidneys = onlyHealthyKidneys;
        res.send()
    }
    else{
        res.status(411).send("all kidney are healthy")
    }
    
});

function checkIfallKidneysHealthy(){
    let nothealty = false;
    let chacking = users[0].kidneys.map(kidneys => {
        if(!kidneys.healthy){
            return nothealty=true;
        }
    })

}

app.listen(port,()=>{
    console.log(`running on port ${port}`);
});