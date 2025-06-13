let a = { name: "sujon" };
// console.log(a)

const b = { name: "sheikh" };
// console.log(b)

let c = a;
// console.log(c)

const compr = a === c;
console.log("No change", compr)

const afterCngCompr = a.name = "jerin";

const nextCompr = a === c;
console.log("After change", nextCompr)



console.log("------------start with pass by value--------")


let x = 1
console.log(x)

let y = 2
console.log(y)

const comprXY = x === y;
console.log(comprXY)

let z = x;
console.log(z)

const comprXZ = x === z;
console.log(comprXZ)

z = 10

const changeComprXZ = x === z;
console.log(changeComprXZ)








