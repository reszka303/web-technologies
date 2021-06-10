function numberDigits(number) {
    let counterDigits = 0;
    do {
        counterDigits++;
        number /= 10;
    } while(number >= 0);
    return counterDigits;
}

function printNumberDigits(number) {
    console.log("Liczba " + number + counterDigits(number) + " cyfrowa"); 
}

let number1 = 1;
let number12 = 12;
let number321 = 321;
let number2435 = 2435;

// let counter = numberDigits(number1);
// console.log(counter);
console.log(number1)

// numberDigits(number1);
// printNumberDigits(number1);