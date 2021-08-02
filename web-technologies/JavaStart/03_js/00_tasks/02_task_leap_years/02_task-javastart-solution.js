function isLeap(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function getYearType(year) {
    return isLeap(year) ? "Przestępny" : "Nieprzestępny";
}

function printYearInfo(year) {
    console.log(year + " jest " + getYearType(year));
}

let year1934 = 1934;
printYearInfo(year1934);
let year1988 = 1988;
printYearInfo(year1988);
let year2012 = 2012;
printYearInfo(year2012);