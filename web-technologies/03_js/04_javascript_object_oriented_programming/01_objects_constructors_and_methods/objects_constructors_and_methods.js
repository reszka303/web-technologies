//Inicjalizator obiektu
let product = {
    name: "Czekolada",
    price: 2.5,
    category: ["Słodycze", "Przekąski"],
    producer: {
        name: "Nestle",
        address: "Warszawa"
    }
}

let myObj = {
    a: "first",
    "b": "second",
    3: "third"
}

console.log(product);

//Odwoływanie się do obiektów
console.log(myObj.abc); //undefined, jest to poprawne w Javie byłby błąd
console.log(product.producer.name);
console.log(product["name"]);
console.log(myObj[3]);
console.log(myObj["3"]);
console.log("------------------------");
// console.log(myObj.3); //zapis nie właściwy


//Konstruktory
function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}

let milk = new Product("Mleko", 2.5, "Nabiał");
let chocolate = new Product("Czekolada", 3.0, "Słodycze");

console.log(milk);
console.log(chocolate);
console.log("------------------------");

//Metody
function Calc() {
    this.add = function(a, b) {
        return a + b;
    }
    this.multiply = function (a, b) {
        return a * b;
    }
}

let calc = new Calc();
let add = calc.add(10, 5);
console.log(add);
console.log(calc.multiply(8, 8));
console.log("------------------------");

let calculator = {
    add: function(a, b) {
        return a + b;
    },
    multiply: function(a, b) {
        return a * b;
    }
}

let addCalculator = calculator.add(10, 5);
console.log(addCalculator);
console.log(calculator.multiply(8, 8));
console.log("------------------------");


let calculatorNoFunction = {
    add(a, b) { //no keyword function
        return a + b;
    },
    multiply(a, b) { //no keyword function
        return a * b;
    }
}

let addCalculatorNoFunction = calculatorNoFunction.add(10, 5);
console.log(addCalculatorNoFunction);
console.log(calculatorNoFunction.multiply(8, 8));
console.log("------------------------");

//Rozszerzanie obiektów
let chocolateProduct = {
    name: "Czekolada",
    nettoPrice: 2.5
}

chocolateProduct.quantity = 10;
chocolateProduct.producer = "Nestle";
chocolateProduct.bruttoPrice = function() {
    return this.nettoPrice * 1.23;
}

console.log(chocolateProduct);
console.log(chocolateProduct.bruttoPrice());
console.log("------------------------");

let productFor = {
    name: "Czekolada",
    nettoPrice: 2.5
}

for(key in productFor) {
    console.log(key + ": " + productFor[key]);
}