// console.log(window);

// console.log(window.location);

var x = 5;
let y = 10;

// console.log(x); //5
// console.log(y); //10
// console.log(window.x); //5
// console.log(window.y); //undefined

var name = "John";

function showNameAndChange() {
    let age = 20;
    console.log(name + " " + age);
    name = "Peter";
}

showNameAndChange();
console.log(name);
console.log("-----------------------");

var name1 = "John";

function showNameAndChange1() {
    let age1 = 20;

    function showNameWithAge() {
        console.log(name + " " + age1);
    }

    showNameWithAge();
    name1 = "Peter";
}

showNameAndChange1();
console.log(name1);
console.log("-----------------------");

var name2 = "John";

function showNameAndChange2() {
    console.log(name2 + age2);
    {
        var age2 = 20;
    }
    console.log(name2 + " " + age2);
    name2 = "Peter";
}

showNameAndChange2();
console.log(name2);
console.log("-----------------------");

function count() {
    var counter = 10;

    for(var counter = 5; counter > 0; counter--) {
        console.log("inside: " + counter);
    }
    console.log("outside: " + counter);
}

count();

console.log("-----------------------");

function count1() {
    let counter = 10;

    for(let counter = 5; counter > 0; counter--) {
        console.log("inside: " + counter);
    }
    console.log("outside: " + counter);
}

count1();