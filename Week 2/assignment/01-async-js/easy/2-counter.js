// function counter(n) {
//     if (n >= 0) {
//         console.log(n);
//         setTimeout(() => {
//             counter(n - 1);
//         }, 1000);
//     }
// }

// counter(5);

function counter(n){
    if(n<0){
        return null;
    }
    setTimeout(()=>{
        console.log(n);
        n--; 
        counter(n);
        
    },1000);
}

counter(5);