const fs= require('fs');
function Reading(){
    fs.readFile("../only txt files/b.txt","utf-8",(err,data)=>{
        console.log(data);
        
    })
}
Reading();
console.log("hello");
let a=0;
for(let i=0;i<10000000000;i++){
    a++;
}