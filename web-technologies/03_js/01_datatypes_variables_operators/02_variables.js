// deklarcja zmiennych
var age = 5;
let name = "Jan";
const pesel = "123456789";

//odwoływanie się do zmiennych
console.log("Zmienna \"age\" wynosi: " + age + " lat");
console.log("Zmienna \"name\" to: " + name);
console.log("Zmienna \"pesel\" wynosi: " +  pesel);

//Java jest językiem statycznie typowanym
//JavaScript jest językiem dynamicznie typowanym

name = 10;
console.log("Zmienna \"name\" po dynamicznej zmianie typu String na int wynosi: " + name);
