//Tablice w JavaScript w znaczący sposób różnią się od tablic w Javie.
//Na tabliach w JavaScript możesz wywoływać wiele metod.
//W JS mamy do czynienia z dynamicznym typowaniem i brak typów generycznych dlatego też, możemy
//przechowywac wartości i obiekty dowolnego typu

let numbers1 = [1,2,2];
let numbers2 = new Array(1, 2, 3, 4);
let numbers3 = Array.of(1, 2, 3, 4, 5);

console.log(numbers1);
console.log(numbers2);
console.log(numbers3);

//Różnica pomiędzy powyższymi zapisami jest taka, że wywołując konstruktor new Array(5) utworzymy
//tablicę o rozmiarze 5. W przypadku literały tablicowego [5] lub wywołania metody Array.of(5) 
//powstanie tablica z jednym elementem o wartości 5 a nie rozmiarze 5.

let numbers4 = [5];
let numbers5 = new Array(5);
let numbers6 = Array.of(5);

console.log("Tablica [5]:");
console.log(numbers4);
console.log("Tablica new Array(5):");
console.log(numbers5);
console.log("Tablica Array.of(5):");
console.log(numbers6);

//Tablice w JS są heterogeniczne, co oznacza, że możemy w nich umieszczać wartości różnych typów
let array1 = [1, "Ania", 5.5, [1, 2, 3]];
console.log(array1);

//W JS tak jak w Javie rozpoczynają się od 0 i odwołujemy się do elementów tablicy wskazując wybrany
//indeks poprzez podanie w kwadratowym nawiasie nr indeksu
//Przy odwołaniu się do nie istniejącego indeksu nie otrzymamy żadnego błędu jak w Javie
//ArrayIndexOutOfBoundException tylko wartość undefined
//Długość tablicy pobieramy poprzez odwołanie się do własności length.
let numbers7 = [10,20,30,40,50];
console.log(numbers7[0]);
console.log(numbers7[4]);
console.log(numbers7[10]);
console.log(numbers7.length);

//Tablice w JS są dynamiczne im bliżej im do ArrayListy niź samej tablicy w Javie
//W celu dodania kolejnego elementu możemy sie odwołować po prostu do odpowiedniego indeksu i 
//przypisać do niego wartość 
let numbers8 = [10, 20, 30, 40, 50];
numbers8[5] = 60;
console.log(numbers8);

//Jeżeli wstawi się jakąś wartość na bardziej odległy i nie istniejący indeks np 9, to rozmiar tablicy
//zwiększy się do 10 elementów a ze względu na heterogeniczną naturę tablic w JS elementy o indeksach
//od 5 do 8 będą miały wartość undefined
let numbers9 = [10, 20, 30, 40, 50];
numbers9[9] = 60;
console.log(numbers9);


// Tablice w JS udostępniają wiele przydatnych metod
// Metoda push(arg) dodaje element arg na końcu tablicy
let numbers10 = [10, 20, 30, 40, 50];
numbers10.push(60);
console.log(numbers10);

//Metoda pop() pobiera ostatni element z tablicy i go usuwa
//Czyli usunie 50 i wyświetli tablicę bez 50
let numbers11 = [10, 20, 30, 40, 50];
numbers11.pop();
console.log(numbers11);

//Metoda shift() zwraca pierwszy element z tablicy i go usuwa
//Czyli usunie 10 i wyświetli tablicę bez 10
let numbers12 = [10, 20, 30, 40, 50];
numbers12.shift();
console.log(numbers12);


//Metoda unshift(arg) dodaje element arg na początku tablicy o wartości podanej wartości
//W tablicy dodane zostanie zero na początku tablicy
let numbers13 = [10, 20, 30, 40, 50];
numbers13.unshift(0);
console.log(numbers13);

//Do iterowania po tablicy możesz wykorzystać pętle fori pętle lub pętle while, ale można
//też skorzystać z pętli for-of, która jest odpowiednikiem pętli foreach w Javie

let numbers14 = [10, 20, 30, 40, 50];
for(const number1 of numbers14) {
    console.log(number1);
}

//Pętla for-of umożliwia iterowanie po stringach
let word1 = "kot";
for(const letter1 of word1) {
    console.log(letter1);
}

//Tablice w JS ma wiele wbudowanych metod dzięki czemu możne je łatwo wywołać.
//Metoda reverse() odwraca kolejność elementów w tablicy
let numbers15 = [10, 20, 30, 40, 50];
numbers15.reverse();
console.log(numbers15);

//metoda sortująca w określonej kolejności
let numbers16 = [30, 50, 20, 40, 10];
console.log("Liczby PRZED sortowaniem:");
console.log(numbers16);
numbers16.sort();
console.log("Liczby PO sortowaniu:");
console.log(numbers16);

//metoda indexOf(val) zwraca indeks pierwszego wystąpienia wartość val w tablicy. Zwraca -1
//gdy val w tablicy nie istnieje
let numbers17 = [10, 20, 30, 40, 50];
let index1 = numbers17.indexOf(20);
console.log("indexOf(20): " + index1);


//metoda join(separator) złącza elementy tablicy i zwraca stringa. Metoda przyjmuje opcjonalny 
//parametr, który będzie separatorem elementów
let numbers18 = [10, 20, 30, 40, 50];
console.log("numbers.join(|): " + numbers18.join("|"));

//metoda concat() łączy tablicę w jedną. Metoda nie modyfikuje oryginalnej tablicy, ale zwraca nową
//tablicę złożoną z sumy elementów ze złączonych tablic 
let numbers19 = [10, 20, 30, 40, 50];
let numbers20 = [100, 200, 300]; 
let bigTab1 = numbers19.concat(numbers20);
console.log(bigTab1);


//Metoda every(predicate) sprawdza czy każdy element zapisany w tablicy spełnia predykat przekazany
//jako argument
let numbers21 = [5, 10, 15, 20];
let is1DividedBy5 = x => x % 5 === 0;
console.log(numbers21.every(is1DividedBy5)); //wynik będzie true bo każda liczba w tablicy 
//dzieli się przez 5

let numbers22 = [5, 10, 16, 20];
let is2DividedBy5 = x => x % 5 === 0;
console.log(numbers22.every(is2DividedBy5)); //wynik będzie false bo 16 nie dzieli się przez 5

//Metode find wyszukuje i zwraca pierwszy element spełniający predykat przekazany jako argument.
//Jeżeli nie znajdzie żadnego elementu, zwraca jest wartość jako undefined
let numbers23 = [5, 10, 150, 200];
let first1BiggerThan100 = x => x > 100;
console.log(numbers23.find(first1BiggerThan100)); //zostanie zwrócony pierwszy element spełaniający
//predykat czy 150

//findIndex(predicate) metoda wyszukuje i zwraca indeks elementu spełniającego predykat 
//przekazanego jako argument. Jeśli żaden element nie spełnia predykatu, zwracana jest wartość -1
let numbers24 = [5, 10, 150, 200];
let first2BiggerThan100 = x => x > 100;
console.log(numbers24.findIndex(first2BiggerThan100));//zwróci indeks nr 2, bo pierwszy element
//spełaniający predykat znajduje się pod indeksem 2.

//metoda includes(val) pozwala sprawdzić czy znajduje się w tablicy wartość przeakazna w argumencie
//Jeśli tak zwraca true, jesli nie zwraca false
let numbers25 = [5, 10, 150, 200];
console.log(numbers25.includes(10)); //zwraca true bo 10 znajduje się w tablicy
console.log(numbers25.includes(33)); //zwraca false bo 33 nie znajduje się w tablicy

//Metoda indexOf(value) zwraca indeks pierwszego wystąpienia wartości przekazanej jako argument
//w przeszukiwanej tablicy. Jeżeli nie ma wskazanej wartości to metoda zwraca -1;
//Metofa działa w ten sposób, że zwraca wartość pierwszego wystąpienia wartości 
let numbers26 = [5, 10, 150, 200];
console.log(numbers26.indexOf(150));//zwraca indeks 2 bo wartość 150 znajduje się pod indeksem 2
console.log(numbers26.indexOf(11)); //zwraca -1 bo nie ma takiej wartości w tablicy


//Metoda lastIndexOf(value) zwraca indeks ostatniego wystąpienia wartości przekazanej jako argument
//w przeszukiwanej tablicy. Jeżeli w tablicy nie ma wskazanej wartości, zwracana jest wartość -1
let numbers27 = [5, 10, 150, 200];
console.log(numbers27.lastIndexOf(200));//zwraca indeks 3 bo wartość 200 znajduje się pod indeksem 3
console.log(numbers27.lastIndexOf(11)); //zwraca -1 bo nie ma takiej wartości w tablicy

//Metoda some sprawdza czy przynajmniej jeden element zapisany w tablicy spełnia predykat przekazany
//jako argument
let numbers28 = [5, 10, 150, 20, 20];
let numbers29 = [1, 2, 3, 4];
let first3BiggerThan100 = x => x > 100;
console.log(numbers28.some(first3BiggerThan100));
console.log(numbers29.some(first3BiggerThan100));