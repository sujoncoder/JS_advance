const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("Yes dude it true");
    } else {
        reject(" Failed to fetch data 🌋")
    }

});

promise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })