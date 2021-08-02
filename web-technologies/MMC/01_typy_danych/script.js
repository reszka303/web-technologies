const text = "To Jest Tekst";
console.log(text);

const bigText = text.toUpperCase();
console.log(bigText);

const lowText = text.toLowerCase();
console.log(lowText);

const name = "maciej";
const newName = name.charAt(0).toUpperCase() + name.slice(1);
console.log(newName);

const cities = "Kraków, Wrocław, Warszawa";
const citiesArray = cities.split(", ");
console.log(citiesArray);

const date = new Date();
console.log(date.toLocaleDateString("pl"))
console.log(date.toLocaleDateString("en"));
