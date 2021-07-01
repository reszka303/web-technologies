function createArray(size, limit = 100) {
    let array = new Array(size);
    for(let i = 0; i < size; i++) {
        array[i] = Math.floor(Math.random() * limit)
    }
    return array;
}

function multiplyEach(array, multiplier) {
    for(let i = 0; i <array.length; i++) {
        array[i] = array[i] * multiplier;
    }
}

let arr = createArray(10, 10);
console.log("Source: " + arr);
multiplyEach(arr, 2);
console.log("Multiplied: " + arr);