// ✅ Requirements:
// Print: "Customer enters restaurant"
// Simulate taking the order with a setTimeout(2 seconds delay):
// ----- After 2 seconds, print: "Waiter takes order"
// Immediately after calling setTimeout, print: "Waiter is preparing drinks"
// After 4 seconds(from the start), print: "Chef finishes cooking"
// Finally, after 5 seconds, print: "Order served to customer"



console.log("Customer enters restaurant 👋");

function takeOrder() {
    setTimeout(() => {
        console.log("Waiter takes order 📙");
    }, 2000)

    console.log("Waiter is preparing drinks 🍸");

    setTimeout(() => {
        console.log("Chef finishes cooking 🏁");
    }, 4000)

    setTimeout(() => {
        console.log("Order served to customer 😁");
    }, 5000)
};

takeOrder();


// --------------- ANOTHER WAY----------------- 


console.log("Customer enters restaurant 👋");

function takeOrder() {
    console.log("Waiter is preparing drinks 🍸");

    setTimeout(waiterTakeOrder, 2000)
    setTimeout(prepareCooking, 4000)
    setTimeout(serveCustomer, 5000)

};

takeOrder();



function waiterTakeOrder() {
    console.log("Waiter takes order 📙");
};

function prepareCooking() {
    console.log("Chef finishes cooking 🏁");
};


function serveCustomer() {
    console.log("Order served to customer 😁");
};