/*console.log("Create a counter in Javascript (counts down from 30 to 0)");
let counter = 30;
function print() {
    console.log(counter--);
}
for(let i = 0; i < 30; i++){
    setTimeout(print, (i+1)*1000);
}
*/




/*
console.log("Calculate the time it takes between a setTimeout call and the inner function actually running");
const startTime = performance.now();

setTimeout(function() {
  const endTime = performance.now();
  const timeTaken = endTime - startTime;
  console.log(`Time taken: ${timeTaken} milliseconds`);
},);
*/

/*function doSomething(){
    a=10;
    b=20;
    return a+b;
}
const t0 = performance.now();
console.log(t0);
doSomething();
const t1 = performance.now();
console.log(t1);
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
*/


// console.log("Create a terminal clock (HH:MM:SS)");

// var hh=0;
// var mm=0 
// var ss=0;

// setInterval(() => {
//     console.log(hh,mm,ss);
//     ss++;
//     if(ss==60){
//         mm++;
//         ss=0;
//         if(mm==60){
//             mm=0;
//             ss=0;
//             hh++;
//             if(hh==24){
//                 hh=0;
//                 mm=0;
//                 ss=0;
//             }
//         }
//     }
// }, 1000);



console.log("Create a terminal clock (HH:MM:SS)");

var hh = 0;
var mm = 0;
var ss = 0;

setInterval(() => {
  console.log(`${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`);
  ss++;
  if (ss == 60) {
    mm++;
    ss = 0;
    if (mm == 60) {
      mm = 0;
      hh++;
      if (hh == 24) {
        hh = 0;
        mm = 0;
        ss = 0;
      }
    }
  }
}, 1000);
