// Closure
const closureFunc = () => {
    const a = 10;
    const anotherFunc = () => {
        const b = 20;
        console.log(a + b);
    };
    return anotherFunc;
};
const result = closureFunc();
console.dir(result)