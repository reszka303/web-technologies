//Kod globalny
var x = "Stefan";
let y = "Karol";

console.log(x); //Stefan
console.log(this.x); //Stefan
// console.log(window.x);//Stefan

console.log(y); //Karol
// console.log(this.y); //undefined
// console.log(window.y); //undefined

// console.log(this === window); //true
console.log("------------");
//Funkcje
function showThis() {
    console.log(this);
}

// showThis(); //window
console.log("------------");

function Product(name, price) {
    this.name = name;
    this.price = price;
    this.bruttoPrice = function() {
        console.log(this);
        console.log(this.price * 1.23);
    }
}

let milk = new Product("mleko", 3.0);
milk.bruttoPrice();
console.log("------------");

let chocolate = {
    name: "czekolada",
    price: 3.0,
    bruttoPrice: function() {
        console.log(this);
        console.log(this.price * 1.23);
    }
}
chocolate.bruttoPrice();


class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    bruttoPrice() {
        console.log(this);
        console.log(this.price * 1.23);
    }
}

let bread = new Item("chleb", 3.0);
bread.bruttoPrice();
let soap = new Item("mydło", 4.0);
soap.bruttoPrice();
console.log("------------");

//Metody statyczne
class PriceCalculator {
    static bruttoPrice(price) {
        return price * 1.23;
    }

    static showNettoAndBruttoPrice(price) {
        const bruttoPrice = this.bruttoPrice(price); //lub PriceCalculator.bruttoPrice(price);
        console.log(`netto: ${price}, brutto: ${bruttoPrice}`);
    }
}

PriceCalculator.showNettoAndBruttoPrice(10);
console.log("------------");

//Dynamiczne this
var price = 10;

function bruttoPrice() {
    console.log(this);
    console.log(this.price * 1.23);
}
bruttoPrice();

let smartphone = {
    name: "Smartfon",
    price: 1000,
    calculatePrice: bruttoPrice
}

smartphone.calculatePrice();
console.log("------------");

var price1 = 10;

let bruttoPrice1 = () => {
    console.log(this);
    console.log(this.price1 * 1.23);
}
bruttoPrice1();

let smartphone1 = {
    name: "smartphone",
    price: 1000,
    calculatePrice: bruttoPrice1
}

smartphone1.calculatePrice();