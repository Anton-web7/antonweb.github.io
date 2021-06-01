'use strict';
let list = [];
let inputNumber;

function numberAsking() {
    inputNumber = prompt('Write number');
    inputNumber = parseInt(inputNumber);
}

function numberChecking() {
    while (inputNumber !== "" || inputNumber !== null) {
        if (isNaN(inputNumber)) {
            alert("Write integer value");
            numberAsking();
        } else {          
            return;
        }
    }
}

function primaryChecking() {
    numberAsking();
    numberChecking();

    for (let i = 1; i <= inputNumber; i++) {
        if (i % 5 === 0) {
            list.push(i);
        }
    }
    if (list.length === 0) {
        alert("Sorry, no numbers")
    } else {
        console.log(list);
    }

}

primaryChecking();
