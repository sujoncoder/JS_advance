const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
    const result = value > 18;
    console.log(result);
    return result;
}