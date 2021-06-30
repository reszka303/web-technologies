let str1 = "To jest napis";
let str2 = 'To jest napis';
let str3 = `To jest napis`;
console.log(str1);
console.log(str2);
console.log(str3);

str1 = "To jest \"cytat\" sławnego człowieka";
str2 = "To jest \'cytat\' sławnego człowieka"
console.log(str1);
console.log(str2);

let name = "Piotr";
let age = 20;
console.log(name + " ma " + age + " lat");

let intro = `${name} za rok będzie miał ${age + 1} lat`;
console.log(intro);

let sqlQuery = `
SELECT * FROM
    employees
WHERE
    gender = 'M' AND hire_date >= '1990-01-01'
ORDER BY
    hire_date
LIMIT 
    10
`;
console.log(sqlQuery);

let str = new String("This works");
console.log(str);

console.log(typeof "example"); //string
console.log(typeof new String("example")); //object

//charAt(number)
let strAlaMaKota = "Ala ma kota";
console.log(strAlaMaKota.charAt(2)); //a

//concat(string)
let strAla = "Ala";
let strMa = " ma";
let strKota = " kota";

let concat = strAla.concat(strMa).concat(strKota);
console.log(concat);

//includes(string)
if(strAlaMaKota.includes("kot")) {
    console.log("Napis zawiera słowo kot");
}

if(strMa.includes("kot")) {
    console.log("Napis zawiera słowo kot");
} else {
    console.log("Napis nie zawiera słowo kot");
}

//endsWith(string)
if(strAlaMaKota.endsWith("kota")) {
    console.log("Napis zawiera na końcu słowo \"kota\"");
}

if(strMa.endsWith("kota")) {
    console.log("Napis zawiera na końcu słowo \"kota\"");
} else {
    console.log("Napis nie zawiera na końcu słowo \"kota\"");
}

//indexOf(string)
console.log(strAlaMaKota.indexOf("ma"));//4

//lastIndexOf(string)
console.log(strAlaMaKota.lastIndexOf("kot"));//7

//repeat(number)
let strWitam = " Witam ";
console.log(strWitam.repeat(5));

//replace(string, string)
let strAlaMaPsa = strAlaMaKota.replace("kota", "psa");
console.log(strAlaMaPsa);

//replaceAll(string, string)
let alaMaKotaIPiotrMaKota = "Ala ma kota i Piotr ma kota";
let alaMaPsaIPiotrMaPsa = alaMaKotaIPiotrMaKota.replaceAll("kota", "psa");
console.log(alaMaPsaIPiotrMaPsa);
 
//slice(number, number)
let alaMakotaIPiotrTezMaKota = "Ala ma kota i Piotr też ma kota"; 
let sliceStr = alaMakotaIPiotrTezMaKota.slice(14,23);
console.log(sliceStr);

//split(string)
console.log(strAlaMaKota.split(" "));
console.log(strAlaMaKota.split(""));

//startsWith(string)
if(strAlaMaKota.startsWith("Ala")) {
    console.log("Napis zaczyna się od słowa \"Ala\"");
}

if(strAlaMaKota.startsWith("ma")) {
    console.log("Napis zaczyna się od słowa \"ma\"");
} else {
    console.log("Napis nie zaczyna się od słowa \"ma\"");
}

//substr(startIndex, length) / substring(startIndex, endIndex)
console.log(strAlaMaKota.substr(4, 2)); //ma
console.log(strAlaMaKota.substring(4, 6)); //ma

//toLowerCase() / toUpperCase()
console.log(strAlaMaKota.toLowerCase());
console.log(strAlaMaKota.toUpperCase());

//trim() / trimStart() / trimEnd()
let alaMaKotaTrim = "   Ala ma kota   ";
console.log(alaMaKotaTrim.trim()); //"Ala ma kota"
console.log(alaMaKotaTrim.trimStart()); //"Ala ma kota "
console.log(alaMaKotaTrim.trimEnd()); //" Ala ma kota"