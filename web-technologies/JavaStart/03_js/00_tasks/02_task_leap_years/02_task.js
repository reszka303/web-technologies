//Rozwiązanie nr 1
let year1934 = 1934;
let year1988 = 1988;
let year2012 = 2012;

console.log("Rozwiązanie zadania sposób 1");
let checkLeapYear = function(year) {
    let verifiedYear = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    let typeYear = verifiedYear ? "Przestępny" : "Nieprzestępny";
    console.log(year + " jest " + typeYear);
}



checkLeapYear(year1934);
checkLeapYear(year1988);
checkLeapYear(year2012);
console.log("");

// Rozwiązanie nr 2
console.log("Rozwiązanie zadania sposób 2");
let verifiedYear1 = function(year) {
    let verifiedYear = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    return verifiedYear;
}

let typeYear = function(verifiedYear) {
    let typeYear = verifiedYear ? "Przestępny" : "Nieprzestępny";
    return typeYear;
}

let printYearType = function(year, typeYear) {
    console.log(year + " jest " + typeYear);
}

//1934
let verifiedYear1934 = verifiedYear1(year1934);
let typeYear1934 = typeYear(verifiedYear1934);
let printYearType1943 = printYearType(year1934, typeYear1934);

//1988
let verifiedYear1988 = verifiedYear1(year1988);
let typeYear1988 = typeYear(verifiedYear1988);
let printYearType1988 = printYearType(year1988, typeYear1988);

//2012
let verifiedYear2012 = verifiedYear1(year2012);
let typeYear2012 = typeYear(verifiedYear2012);
let printYearType2012 = printYearType(year2012, typeYear2012);