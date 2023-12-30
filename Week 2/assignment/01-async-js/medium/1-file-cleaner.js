const fs = require('fs');

async function ReadThenWrite(){
    let read = await fs.readFile('1-file-cleaner.txt','utf-8',(err,data)=>{
        console.log(`this is the before txt - "${data}"`);
        let content = data.trim().replace(/\s+/g, ' ');
        console.log(`this is after removing text - "${content}"`);
        fs.writeFile('1-file-cleaner.txt',content,'utf-8',(err)=>{
            if(err){
                console.log("there was an error");
            }
            else console.log("Done Boss");           
        });
    });
    // let content = data.trim().replace(/\s+/g, ' ');
    // fs.writeFile('1-file-cleaner.txt',content,'utf-8',(err)=>{
    //     if(err){
    //         console.log("there was an error");
    //     }
    //     else console.log("Done Boss");
    // });
}
ReadThenWrite();