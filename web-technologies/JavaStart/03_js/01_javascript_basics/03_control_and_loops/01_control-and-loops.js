// //Struktury sterująca if
let number = 5;
if(number !== 0) {
    console.log("Liczba jest różna od 0");
} else {
    console.log("Liczba to 0");
}

// //W JavaScript możemy w miejsce warunków przekazać nie tylko wartość typu logicznego, albo wyrażenie
// //logiczne, ale również liczbę, czy napis, które zostaną przekonwertowane zgodnie z zasadami:
// //odpowiednik false są: Null, undefinied, 0, wartość NaN(not a number) i pusty String 
// //odpowiednik true są: liczby różne od 0, niepuste Stringi, dowolny obiekt
let number1 = 5;
if(number1) {
    console.log("Liczba jest różna od 0");
} else {
    console.log("Liczba to 0");
}

//blok switch/instrukcja switch

// //Switch w JavaScript różni się tym od switch w Javie, że możemy do switcha przekazywać
// //jako argument wartość dowolnego typu prostego a nie tylko int, Stringi i enumy jak w Javie
let value = 5.5;
switch(value) {
    case 5.0:
        console.log("Liczba 5");
        break;
    case 5.5:
        console.log("Liczba 5.5");
        break;
    default:
        console.log("Nieznana wartość");
}

//Pętle

//Pętla for
for(let i = 0; i < 3; i++) {
    console.log("Liczba for: " + i);
}

//Pętla while
let counter = 0;
while(counter < 3) {
    console.log("Liczba while: " + counter);
    counter++;
}

//Pętla do while
counter = 0;
do {
    console.log("Liczba do while: " + counter);
    counter++;
} while (counter < 3);


//W JavaScript mamy pętle jak for, while oraz do while. Różnica jest taka sama jak w przypadku
//instrukcji if, czyli w miejscu warunku możemy przekazać wartość inną niż true/false. które
//zostaną przekonwertowane do typu logicznego zgodnie regułą opisaną w powyżej w struktury sterującej
let counter1 = 5;
while(counter1) { //dopóki counter jest różny od zera to wykonuje się to co jest w ciele pętli
    console.log(counter1);
    counter1--;
}

//Break i continue

// //Przykład break
let i = 1;
while(true) {
    console.log(i);
    if (i === 3) {
        break;
    }
    i++;
}

//Przykład continue
let k = 11;
while (k > 1) {
   k--;
   if (k === 5) {
       continue;
   }
   console.log(k);
   
}


