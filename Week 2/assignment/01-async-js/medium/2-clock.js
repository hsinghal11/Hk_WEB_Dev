setInterval(()=>{
    let time = new Date();
    let seconds = time.getSeconds().toString().padStart(2,'0');
    let minutes = time.getMinutes().toString().padStart(2,'0');
    let hours = time.getHours().toString().padStart(2,'0');
    let AmPm;
    if(hours>=12){
        hours=hours-12;
        AmPm="PM";
    }
    else AmPm="AM";
    let currentTime= `${hours}:${minutes}:${seconds} ${AmPm}`
    console.log(currentTime);
    
    // console.log(hours,minutes,seconds);
    
},1000);