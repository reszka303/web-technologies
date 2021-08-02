let value1 = 5;
let value2 = 10;

let addAndPrint = function(a, b) {
    let add = function(x, y) {
        let sum = x + y;
        return sum;
    }
    let result = add(a, b);
    let message = `${a} + ${b} = ${result}`;
    console.log(message);
}

addAndPrint(value1, value2);


var name = "Jan";
console.log(name + " " + age);
var age = 5;
console.log(name + " " + age);


console.log(multiply(5, 10));//50

function multiply(x, y) {
    return x * y;
}

// console.log(multiplyVar(5, 10)); //TypeError: multiplyVar is not a function

// var multiplyVar = function(x, y) {
//     return x * y;
// }

// console.log(multiplyLet(5, 10)); //ReferenceError: multiplyLet is not defined

// let multiplyLet = function(x, y) {
//     return x * y;
// } 

sayHello();

function sayHello() {
    console.log(name1); //undefined
    var name1 = "John";
    console.log(name1); //John
}