// ✅ Requirements:
// Print "Customer orders coffee ☕"

// ------ Create a function makeCoffee(callback):
// ------  After 2 seconds, print "Coffee is brewed ☕🔥"

// Then call the callback function

// The callback function should print "Coffee served to customer ✅"

function makeCoffee(callback) {
    console.log("Customer orders coffee ☕")

    setTimeout(() => {
        console.log("Coffee is brewed ☕🔥")
        callback()
    }, 2000);

};

function deliveryMan() {
    console.log("Coffee served to customer ✅")
};

makeCoffee(deliveryMan);