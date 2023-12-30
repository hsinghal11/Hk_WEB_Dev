// const { error } = require('console');
const fs = require('fs');
function Reading(){
    let v1=0;
    for(let i=0;i<1000000000;i++){
        v1++;
    }
    console.log(v1+" : of first not main");
    fs.readFile('sampleFor3.txt','utf-8',(err,data)=>{
        console.log(data);
        
    });
    v1=0;
    for(let i=0;i<1000000000;i++){
        v1++;
    }
    console.log(v1+" : of second not main");
    
}

Reading();
let v1=0;
for(let i=0;i<1000000000;i++){
    v1++;
}
console.log(v1 + " : of main");
  

/*
                (OUTPUT)
1000000000 : of first not main
1000000000 : of second not main
1000000000 : of main
             this                a                         sample                    text
*/
