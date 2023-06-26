// Lexical
const parentFunc = () => {
    const father = 100;
    const childFunc = () => {
        const child = 50;
        console.log(father + child);
    };
    childFunc();
};
parentFunc();

// Explain: Lexical scope mean globalScope inside localScope from access variable. 