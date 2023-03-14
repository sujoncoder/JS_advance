const person = {
    name: "Sujon",
    age: 25,
    isLove: true,
    loveMe: () => {
        console.log("I love u...........")
    }
}
for (const element in person) {
    console.log(element)
}