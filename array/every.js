const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
    const result = value > 18;
    console.log(result);
    return result;
}