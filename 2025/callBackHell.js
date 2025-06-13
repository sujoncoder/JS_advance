console.log("Customer enters ☕");

function coffeeProcess() {
    setTimeout(() => {
        console.log("Taking order...");

        setTimeout(() => {
            console.log("Brewing coffee...");

            setTimeout(() => {
                console.log("Packing coffee...");

                setTimeout(() => {
                    console.log("Coffee served ✅");
                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);
}

coffeeProcess();
