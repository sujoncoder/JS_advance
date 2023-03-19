const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
    const result = value > 18;
    console.log(result);
    return result;
}