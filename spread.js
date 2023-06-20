// spread oparator.
const numbers = [1, 2, 3, 4];

const aFunc = (a, b, c, d) => {
    console.log(a+b+c+d);
};
aFunc(...numbers)