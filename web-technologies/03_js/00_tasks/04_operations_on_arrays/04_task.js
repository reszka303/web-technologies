//metoda z wykorzystaniem pętli for-of
function isFoundByForOf(numbers1, numbers2) {
    let counter = 0;
    for(const number1 of numbers1) {
        for(const number2 of numbers2) {
            if (number1 === number2) {
                counter++;
            }

        }
    }
    return counter;
}

function combineTwoArrays(numbers1, numbers2) {
    let joinedArray = numbers1.concat(numbers2);
    return joinedArray;
}

function isFoundByArrows(array) {
    array = x => x === x
}

function printResult(toDisplay) {
    console.log("W obu tabliach znajduje się: " + toDisplay + " takich samych liczb");
}

//Kod sprawdza ile elementów jest równych w obu tablicach przy wykorzystaniu pętli for-of 
//i wyświetla wynik
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [3, 4, 6, 8];
counter = isFoundByForOf(numbers1, numbers2);
printResult(counter);



