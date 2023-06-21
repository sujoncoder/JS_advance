// ...Rest
const es6 = (...more) => {
    for (let i = 0; i< more.length; i++ ) {
        const elementEs6 = more[i]
        console.log(elementEs6)
    }
}
es6(44, 55, 66, 77);

// Explain : ...rest parameter means when you don,t know, how many arguments send. thats case you use ...rest perameter. this perameter has no naming convention. it,s es6 version and more oparation available on this oparator like find, filter, map, reduce.