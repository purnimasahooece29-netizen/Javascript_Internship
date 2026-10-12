
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initial product inventory
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Function to ask questions
function ask(question) {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
}

// Main program
async function main() {
    console.log("--- Initializing Inventory System ---");

    // Input new product
    const name = await ask("Enter new product name: ");
    const priceInput = await ask("Enter product price: ");
    const price = Number(priceInput);

    if (name.trim() === "" || !Number.isFinite(price) || price < 0) {
        console.log("Invalid product details.");
        rl.close();
        return;
    }

    // Add product to inventory
    products.push({
        name: name.trim(),
        price: price
    });

    console.log("\n--- Processing Inventory Roster ---");

    // Display products and categories
    products.forEach(product => {
        let category;

        if (product.price < 50) {
            category = "Budget";
        } else if (product.price < 200) {
            category = "Standard";
        } else {
            category = "Premium";
        }

        console.log(
            "Item:", product.name,
            "($" + product.price + ")",
            "-> Category:", category
        );
    });

    // Calculate total inventory value
    const totalValue = products.reduce(
        (total, product) => total + product.price,
        0
    );

    console.log("\n--- Financial Analytics ---");
    console.log("Total Inventory Value: $" + totalValue);

    // Filter products under $200
    const affordable = products.filter(
        product => product.price < 200
    );

    console.log(
        "Filtered Affordable Items (Under $200):",
        affordable.map(product => product.name)
    );

    // Generate formatted report
    const report = products.map(
        product =>
            product.name.toUpperCase() +
            ": $" + product.price
    );

    console.log("Formatted Report List:", report);

    rl.close();
}

main();
