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
// let numbers8 = [10,20,30,40,50];
// numbers8[5] = 60;
// console.log(numbers8);

//Jeżeli wstawi się jakąś wartość na bardzie odległy i nie istniejący indeks np 9, to rozmiar tablicy
//zwiększy się do 10 elementów a ze względu na heterogeniczną naturę tablic w JS elementy o indeksach
//od 5 do 8 będą miały wartość undefined
let numbers9 = [10,20,30,40,50];
numbers9[9] = 60;
console.log(numbers9);





