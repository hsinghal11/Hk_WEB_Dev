const fs = require('fs');

function writeOnly(content){
    fs.writeFile('sampleFor4.txt',content,'utf-8',(err)=>{
        if(err){
            console.log("there was an error");
        }
        else console.log("Work Done");
        
    });
}

let story="eak tha raja eak thi raani dono hai coding ke diwane"
writeOnly(story);