let negacje = !true;
let a = true;
let b = false;

let koniunkcja = a && b; //jeśli a i b są true zwracany wynik to true, 
//jeśli jedna wartość ma false, to zwracana wartość też będzie false

let alternatywa = a || b; //jeśli a lub b będzie true, to wynik też jest true

console.log("Negacja: " + negacje);
console.log("Koniunkcja: " + koniunkcja);
console.log("Alternatywa: " + alternatywa);