function getNumberOfDigits(number) {
    let digits = 0;
    do {
        digits++;
        number /= 10;
    } while (number >= 1);
    return digits;
}

console.log("Liczba cyfr w liczbie 1 to: " + getNumberOfDigits(1));
console.log("Liczba cyfr w liczbie 22 to: " + getNumberOfDigits(22));
console.log("Liczba cyfr w liczbie 223 to: " + getNumberOfDigits(223));
console.log("Liczba cyfr w liczbie 2345 to: " + getNumberOfDigits(2345));
console.log("Liczba cyfr w liczbie 12345 to: " + getNumberOfDigits(12345));