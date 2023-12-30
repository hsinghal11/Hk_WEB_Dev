function sum(num1, num2, Callit) {
    let result = num1 + num2;
    Callit(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
sum(3,10,displayResultPassive);