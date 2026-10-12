
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter bill amount: ", function(bill) {
    rl.question("Enter tip percentage: ", function(percentage) {

        let subtotal = Number(bill);
        let tipPercentage = Number(percentage);

        let tip = subtotal * tipPercentage / 100;
        let total = subtotal + tip;

        console.log("Subtotal: $" + subtotal);
        console.log("Tip Percentage: " + tipPercentage + "%");
        console.log("Calculated Tip: $" + tip);
        console.log("Total Amount to Pay: $" + total);

        rl.close();
    });
});

