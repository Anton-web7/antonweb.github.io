'use strict';
let firstNumber = 10;
let secondNumber = 5;
let operationType = 2;
let result;

function calculating(firstNumber, secondNumber, operationType) {
    switch (operationType) {
        case "+":
            result = firstNumber + secondNumber;
            alert(result);
            break;
        case "-":
            result = firstNumber - secondNumber;
            alert(result);
            break;
        case "*":
            result = firstNumber * secondNumber;
            alert(result);
            break;
        case "/":
            result = firstNumber / secondNumber;
            alert(result);
            break;
        default:
            alert("Error! Write only +-*/ values")
    }
}

function inputAsking() {
    firstNumber = prompt("write first number", `${firstNumber}`);
    firstNumber = parseInt(firstNumber);

    secondNumber = prompt("Write second number", `${secondNumber}`);
    secondNumber = parseInt(secondNumber);

    operationType = prompt("Write operation");
}

function inputChecking() {
    while (true) {
        if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
            alert("You wrote correct value. All is fine.");
            return;
        } else {
            alert("Write integer value");
            inputAsking();
        }
    }
}



function main() {
    inputAsking();
    inputChecking();
    calculating(firstNumber, secondNumber, operationType);
}

main();