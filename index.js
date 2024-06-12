let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");
let num1 = parseFloat(input1);
let num2 = parseFloat(input2);
document.getElementById("number1").textContent = num1;
document.getElementById("number2").textContent = num2;

let sumEl = document.getElementById("sum-el");

function add() {
    sum = num1 + num2;
    sumEl.textContent ="Sum: " +sum;
    console.log(sum);
}

function subtract() {
    difference = num1 - num2;
    sumEl.textContent = "Sum: " +difference;
    console.log(difference);
}

function multiply() {
    product = num1*num2;
    sumEl.textContent = "Sum: " +product;
    console.log(product);
} 

function divide() {
    quotient = num1/num2;
    sumEl.textContent = "Sum: "+quotient;
    console.log(quotient);
}

function power() {
    raisedTo = Math.pow(num1, num2);
    sumEl.textContent = "Sum: "+raisedTo;
    console.log(raisedTo);
}

function percentage() {
    percent = (num1/num2)* 100;
    sumEl.textContent = "Sum: " +percent;
    console.log(percent);
}