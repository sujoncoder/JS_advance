const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
    const result = value > 18;
    console.log(result);
    return result;
};