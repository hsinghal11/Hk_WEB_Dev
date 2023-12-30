// MERA CODE
/*
function counter(n){
    if(n==0){
        return null;
    }
    setTimeout(()=>{
        console.log(n);
        n--; 
        counter(n);
        
    },1000);
}

counter(5);*/
//-------------------------------------------------------------------------------------------------------------------------------------------
// CHATGPT KA CODE
/*
function SecondCounter(n){
    const interval = setInterval(()=>{
        if(n==0){
            clearInterval(interval);
        }
        console.log(n);
        n--
        

    },1000);
}
SecondCounter(5);*/