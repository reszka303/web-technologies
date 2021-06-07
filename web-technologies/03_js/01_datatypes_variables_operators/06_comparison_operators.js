let x = 5;
let y = 10;
let result1 = x > y; //false
let result2 = x < y; //true
let result3 = x == y; //false

//JavaScript umożliwia porównywanie stringów

let str1 = "Anna";
let str2 = "Ania";

//W Javie trzeba użyć metody compareTo()
//W JavaScript wystarczy użyć operatora > lub <

//porównywanie leksykalne
let strCompare = str1 > str2;

console.log("Porównanie stringów: " + strCompare);
//Dostaje true, ponieważ litera "n" w Anna jest dalej w alfabecie od "i" w Ania
//Można powiedzieć przez to, że napis Anna jest większy od Ania

let val1 = "1";
let val2 = 1;

let compareDoubleEqualSign = val1 == val2;
let compareTripleEqualSign = val1 === val2;

//W Javie byłby to błąd bo to wygląda jak porównywanie stringa z intem
//W JavaScript możemy porównywać wartości różnych typów
//W wyniku otrzymamy true
console.log("Porównanie różnych typów przy PODWÓJNYM równa się: ");
console.log(val1 == val2); //true

//Jednak będziemy unikali porównywania stringa z intem
//I dlatego do porównywania takich wartości wykorzystuje się potrójne równa się "==="
//Operatora potrójnego równa się uwzlęgdnia wartości czy są równe, ale też czy są
//takiego samego typu


//Poniższy zapis przy pomocy dwóch console.logów jest spowodowany tym, że
//jeśli porównujemy dwie zmienne w console.log to tekst zapisany w cudzysłowach się nie wyświetla
//w środowisku programistycznym przeglądarki Chrome
console.log("Porównanie różnych typów przy POTRÓJNYM równa się: ");
console.log(val1 === val2); //false

//Jeśli natomiast tak jak poniżej dwie zmienne val1 i val2 przy porównywaniu ich
//zapiszemy do jednej zmiennej np: compareDoubleEqualSign to wtedy nie ma problemu
//aby w jednym console.logu zapisać jakiś dodatkowy tekst.
//Przy porównywaniu stringów dzieje się to samo co wyżej
console.log("Porównanie różnych typów przy PODWÓJNYM równa się: " + compareDoubleEqualSign);
console.log("Porównanie różnych typów przy POTRÓJNYM równa się: " + compareTripleEqualSign);

let string1 = "1";
let string2 = "1";

let compareStringsDoubleEqualSign = string1 == string2;
let compareStringsTripleEqualSign = string1 === string2;

console.log("Porównanie stringów przy PODWÓJNYM równa");
console.log(string1 == string2);

console.log("Porównanie stringów przy POTRÓJNYM równa");
console.log(string1 == string2);


console.log("Porównanie stringów przy PODWÓJNYM równa się: " + compareStringsDoubleEqualSign);
console.log("Porównanie stringów przy POTRÓJNYM równa się: " + compareStringsTripleEqualSign);