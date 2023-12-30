/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve();
        },n*1000);
    })
    // return new Promise(function (resolve) {
    //     //1st arg of a Promise class needs to be a function with (resolve) argument.
    //     setTimeout(function () {
    //       //callback
    //       resolve();
    //     }, n * 1000);
    //   });
}

module.exports = wait;
