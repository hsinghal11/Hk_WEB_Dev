// const express = require('express');
// const app=express();
// app.use(express.json());

// let n = 0;
// let berforeTime=0;
// let afterTime =0;
// function avgTime(req,res,next){
//     n++;
//     let CurrentberforeTime = Date.now();
//     berforeTime += CurrentberforeTime;
//     next();
// }

// app.get('/',avgTime,(req,res,next)=>{
//     // console.log(` avg time taken is ${avgtime}`);
//     res.send('ok')
//     next();
// });

// app.use((req,res,next)=>{
//     let CurrentafterTime=Date.now();
//     afterTime+=CurrentafterTime;
//     console.log(n);
    
//     console.log(`avg time taken by ${n} requests is : ${(afterTime-berforeTime)/n}`);
//     next();
// })

// app.listen(3020,()=>{
//     console.log({
//         msg : "server is running"
//     });  
// });

const express = require('express');
const app = express();
app.use(express.json());

let n = 0;
let totalTime = 0;

app.use((req, res, next) => {
    const beforeTime = Date.now();

    res.on('finish', () => {
        const afterTime = Date.now();
        const handlingTime = afterTime - beforeTime;
        totalTime += handlingTime;
        n++;

        console.log(`avg time taken by ${n} requests is : ${totalTime / n}ms`);
    });

    next();
});

app.get('/', (req, res) => {
    res.send('ok');
});

app.listen(3020, () => {
    console.log({
        msg: "server is running"
    });
});
