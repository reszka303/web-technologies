////Deklarowanie funkcji

// //Deklaracja funkcji, czyli bez przypisywania zmiennej i wprowadzenie jej nazwy
function printHello() {
    console.log("Hello");
}

printHello();

// // Wyrażenie funkcyjne funkcji, czyli zadeklarowaie funkcji i przypisanie fukncji do zmiennej,
// // nie trzeba nazywać funkcji wtedy, ale można to zrobić, 
// // ale raczej nie spotykane i lepiej nie stosować tego
let sayHello = function() {
    console.log("Hello!");
}

sayHello();


// //Wywołanie funkcji bezpośrednio po jej zadeklarowaniu
let sayHello2 = function(){
    console.log("Hello!");
}();

//Jeżeli funkcja nie potrzebuje nazwy i nie trzeba jej przypisywać do zmiennej, można skorzystać
//IIFE Immediately invoked Function Expression. Ta notacja często jest wykorzystywana do enkapsulacji,
//ponieważ JavaScript nie ma specyfikatorów dostępu
//Poniższy zapis daje nam namiastkę specyfikatora private w Javie
(function() {
    console.log("Hello!")
})();


////Parametry funkcji

//Funkcje mogą przyjmować dowolną ilość parametrów ale ze względu na dynamiczne typowanie,
//nie jest konieczne określanie ich typu, parametry muszą mieć swoją nazwę
let add = function(a, b) {
    let sum = a + b;
    return sum;
}

let addAndPrint = function(a, b) {
    let sum = a + b;
    console.log(sum);
}

console.log("Wyświetlenie wyniku funkcji Z RETURN: " + add(5,10));
console.log("Wyświetlenie wyniku funkcji BEZ RETURN:"); 
addAndPrint(10,20);

//W ramach funkcji możemy wywoływać w niej inne funkcje
//Poniżej przykład, że funkcę add() wywołujemy w ciele funkcji addAndPrint() i
//potem wywołujemy metodę addAndPrint(), wskazujemy parametry i wyświetlamy wynik 
let add2 = function(a, b) {
    let sum = a + b;
    return sum;
}

let addAndPrint2 = function(a, b) {
    console.log(add(a, b));
}
addAndPrint(10,20);

//W JavaScript możliwe jest nie przekazywanie wszystkich określonych w funkcji parametrów
//czyli funkcja określa 3 parametry a przekazujemy tylko 1. To jest możliwe i poprawne
let sayHello3 = function(firstName, lastName, age) {
    console.log("Cześć " + firstName + " " + lastName + ", wiek: " + age);
}
sayHello("Jan");

//Zwrotne wywołania funkcji tzw. callbacki. Polega to na tym, że jako argument funkcji
//możemymy przekazać inną funkcję, która będzie następnie wywołana w tej pierwszej.
let evaluate = function(a, b, callback) {
    let result = callback(a, b);
    console.log("Wynik wywołania callbacka: " + result);
}

let add3 = function(a, b) {
    return a + b;
}

evaluate(5, 10, add);

// //Popularne jest też wykorzystywanie callbacków z funkcjami anonimowymi
// let evaluate = function(a, b, callback) {
//     let result = callback(a, b);
//     console.log("Wynik wywołania callbacka: " + result);
// }

evaluate(5, 10, function(x, y) {
    return x + y;
});

//Trzeba pamiętać, że nadmierne wykorzystywanie callbacków prowadzi do zjawiska
//callback hell, polega to na tym, że callback może zawierać kolejnego callbacka i ten 
//callback następnego, co powoduje, że wszystko staje się coraz bardzie zagnieżdzone czego
//należy unikać

//Arrows Functions - Funkcje strzałkowe
// strzałki Java: ->
//strzałki JavaScript: =>


//Zapis strzałkowy zwracający wynik, bez słowa return
let multiply = (a, b) => a * b;
console.log("Wynik działania mnożenia Z FUNKCJĄ STRZAŁKOWĄ: " + multiply(3, 5));

//Zapis standardowy
let multiply2 = function(a, b) {
    return a * b;

}
console.log("Wynik działania mnożenia ZAPIS STANDARDOWY: " + multiply2(3, 5));

//Funkcje strzałkowe nie zwracające wyniku, bez słowa return, od razu wyświetlające wynik
let multiplyAndPrint = (a, b) => {
    let multi = a * b;
    console.log(multi);
}

multiplyAndPrint(10, 20);

//Wyjaśnienie skąd pojawia się słowo w konsoli undefined
let multiplyAndPrintUndefined = (a, b) => {
    return a * b;
}
multiplyAndPrintUndefined(5, 10);