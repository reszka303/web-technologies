//inquiry: how to find duplicate in array javascript arrow function
https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array

//Three ways to find minimum and maximum values in a Java array of primitive types.
http://zparacha.com/minimum-maximum-array-value-java

//1. Funkcja, która przyjmuje dwie tablice liczb i sprawdza ile liczb z drugiej tablicy
//znajduje się w pierwszej. Możesz założyć, że liczby w obu tablicach są unikalne.
//Dla tablic [1, 2, 3, 4, 5], [3, 4, 6, 8] oczekiwany wynik to 2.
function countEqualNumbers(array1, array2) {
    let counter = 0;
    for(number1 of array1) {
        for(number2 of array2) {
            if(number1 === number2) {
                counter++;
            }
        }
    }
    return counter;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 6, 8];
let counter = countEqualNumbers(array1, array2);
console.log("Ilość równych liczb w tablicach to: " + counter);



//2. Funkcja, która przyjmuje tablicę liczb, a w wyniku zwraca dwuelementową tablicę,
//w której pierwsza liczba jest najmniejszą, a druga liczba jest największą 
//wartością z przekazanej jako argument tablicy. Zakładamy, że przekazana 
//tablica ma co najmniej 1 element.
//Dla tablicy [10, 5, 15, 20, 3, 8] oczekiwany wynik to [3, 20]
function minMaxArray(array3) {
    let min = array3[0];
    let max = array3[0];
    for(number3 of array3) {
        if(number3 < min) {
            min = number3;
        }
        if(number3 > max) {
            max = number3;
        }
    }
    let minMax = [min, max];
    return minMax;
}

let array3 = [10, 5, 15, 20, 3, 8];
let minMax = minMaxArray(array3);
console.log("Min i max tablicy to: " + minMax);


//3. Funkcja, która przyjmuje tablicę i dowolną liczbę, a w wyniku zwraca nową tablicę, 
//w której wartości z oryginalnej tablicy będą rozdzielone przekazaną liczbą.
//Dla tablicy [5, 10, 15] i liczby 1 oczekiwany wynik to [5, 1, 10, 1, 15, 1]
function interlace(array4, number) {
    let result = [];
    for(numberArray4 of array4) {
        result.push(numberArray4);
        result.push(number);
    }
    return result;
}

let array4 = [5, 10, 15];
let number4 = 1;
let array5 = interlace(array4, number4);
console.log("Tablica wypełniona naprzemiennie to: " + array5);