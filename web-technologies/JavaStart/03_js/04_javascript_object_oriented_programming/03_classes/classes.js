//Pola klasy i metody
class Product {
    constructor(name, nettoPrice) {
        this.name = name;
        this.nettoPrice = nettoPrice;
    }

    bruttoPrice() {
        return this.nettoPrice * 1.23; //stawka podatku 23%
    }
}

let milk = new Product("mleko", 2.5);
console.log(milk);
console.log(milk.bruttoPrice());
console.log("------------");

//Gettery i settery
class Player {
    constructor(nickname, points) {
        this.nickname = nickname;
        this._points = points; //_points sygnalizujemy, że jest to pole prywatne
    }

    get points() {
        return `${this._points} points`;
    }

    set points(value) {
        if(value >= 0) {
            this._points = value;
        } else {
            console.log("Liczba punktów nie może być ujemna");
        }
    }

    get info() {
        return `${this.nickname} : ${this.points}`;
    }

}

let player1 = new Player("John", 22);
player1.points = -5;
console.log(player1.points);
console.log(player1.info);
console.log("------------");

//Składowe statyczne
class Calculator {
    static rectangleArea(rectangle) {
        return rectangle.a * rectangle.b;
    }
}

Calculator.pi = 3.14;

class Rectangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

let rectangle1 = new Rectangle(5, 10);
let area = Calculator.rectangleArea(rectangle1);
console.log(`Pole prostokąta: ${area}`);
console.log(`Liczba PI: ${Calculator.pi}`);
console.log("------------");

//Dziedziczenie
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return `${this.name} - ${this.price}`;
    }
}

class OnlineCourse extends Course {
    constructor(name, price, videoLength) {
        super(name, price);
        this.videoLength = videoLength;
    }

    getInfo() {
        return super.getInfo() + `, czas: ${this.videoLength}`;
    }
}

let onlineCourse = new OnlineCourse("Kurs Java", 199, 480);
console.log(onlineCourse);
console.log(onlineCourse.getInfo());