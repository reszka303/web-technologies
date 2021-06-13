// //Tablice w JavaScript w znaczący sposób różnią się od tablic w Javie.
// //Na tabliach w JavaScript możesz wywoływać wiele metod.
// //W JS mamy do czynienia z dynamicznym typowaniem i brak typów generycznych dlatego też, możemy
// //przechowywac wartości i obiekty dowolnego typu

// let numbers1 = [1,2,2];
// let numbers2 = new Array(1, 2, 3, 4);
// let numbers3 = Array.of(1, 2, 3, 4, 5);

// console.log(numbers1);
// console.log(numbers2);
// console.log(numbers3);

// //Różnica pomiędzy powyższymi zapisami jest taka, że wywołując konstruktor new Array(5) utworzymy
// //tablicę o rozmiarze 5. W przypadku literały tablicowego [5] lub wywołania metody Array.of(5) 
// //powstanie tablica z jednym elementem o wartości 5 a nie rozmiarze 5.

// let numbers4 = [5];
// let numbers5 = new Array(5);
// let numbers6 = Array.of(5);

// console.log("Tablica [5]:");
// console.log(numbers4);
// console.log("Tablica new Array(5):");
// console.log(numbers5);
// console.log("Tablica Array.of(5):");
// console.log(numbers6);

// //Tablice w JS są heterogeniczne, co oznacza, że możemy w nich umieszczać wartości różnych typów
// let array1 = [1, "Ania", 5.5, [1, 2, 3]];
// console.log(array1);

// //W JS tak jak w Javie rozpoczynają się od 0 i odwołujemy się do elementów tablicy wskazując wybrany
// //indeks poprzez podanie w kwadratowym nawiasie nr indeksu
// //Przy odwołaniu się do nie istniejącego indeksu nie otrzymamy żadnego błędu jak w Javie
// //ArrayIndexOutOfBoundException tylko wartość undefined
// //Długość tablicy pobieramy poprzez odwołanie się do własności length.
// let numbers7 = [10,20,30,40,50];
// console.log(numbers7[0]);
// console.log(numbers7[4]);
// console.log(numbers7[10]);
// console.log(numbers7.length);

// //Tablice w JS są dynamiczne im bliżej im do ArrayListy niź samej tablicy w Javie
// //W celu dodania kolejnego elementu możemy sie odwołować po prostu do odpowiedniego indeksu i 
// //przypisać do niego wartość 
// let numbers8 = [10, 20, 30, 40, 50];
// numbers8[5] = 60;
// console.log(numbers8);

// //Jeżeli wstawi się jakąś wartość na bardziej odległy i nie istniejący indeks np 9, to rozmiar tablicy
// //zwiększy się do 10 elementów a ze względu na heterogeniczną naturę tablic w JS elementy o indeksach
// //od 5 do 8 będą miały wartość undefined
// let numbers9 = [10, 20, 30, 40, 50];
// numbers9[9] = 60;
// console.log(numbers9);


// // Tablice w JS udostępniają wiele przydatnych metod
// // Metoda push(arg) dodaje element arg na końcu tablicy
// let numbers10 = [10, 20, 30, 40, 50];
// numbers10.push(60);
// console.log(numbers10);

// //Metoda pop() pobiera ostatni element z tablicy i go usuwa
// //Czyli usunie 50 i wyświetli tablicę bez 50
// let numbers11 = [10, 20, 30, 40, 50];
// numbers11.pop();
// console.log(numbers11);

// //Metoda shift() zwraca pierwszy element z tablicy i go usuwa
// //Czyli usunie 10 i wyświetli tablicę bez 10
// let numbers12 = [10, 20, 30, 40, 50];
// numbers12.shift();
// console.log(numbers12);


// //Metoda unshift(arg) dodaje element arg na początku tablicy o wartości podanej wartości
// //W tablicy dodane zostanie zero na początku tablicy
// let numbers13 = [10, 20, 30, 40, 50];
// numbers13.unshift(0);
// console.log(numbers13);

// //Do iterowania po tablicy możesz wykorzystać pętle fori pętle lub pętle while, ale można
// //też skorzystać z pętli for-of, która jest odpowiednikiem pętli foreach w Javie

// let numbers14 = [10, 20, 30, 40, 50];
// for(const number1 of numbers14) {
//     console.log(number1);
// }

// //Pętla for-of umożliwia iterowanie po Stringach
// let word1 = "kot";
// for(const letter1 of word1) {
//     console.log(letter1);
// }

// //Tablice w JS ma wiele wbudowanych metod dzięki czemu możne je łatwo wywołać.
// //Metoda reverse() odwraca kolejność elementów w tablicy
// let numbers15 = [10, 20, 30, 40, 50];
// numbers15.reverse();
// console.log(numbers15);

// //metoda sortująca w określonej kolejności
// let numbers16 = [30, 50, 20, 40, 10];
// console.log("Liczby PRZED sortowaniem:");
// console.log(numbers16);
// numbers16.sort();
// console.log("Liczby PO sortowaniu:");
// console.log(numbers16);

//metoda indexOf(val) zwraca indeks pierwszego wystąpienia wartość val w tablicy. Zwraca -1
//gdy val w tablicy nie istnieje
let numbers17 = [10, 20, 30, 40, 50];
let index1 = numbers17.indexOf(20);
console.log("indexOf(20): " + index1);







