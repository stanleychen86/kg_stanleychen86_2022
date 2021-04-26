const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter your array please! (add a space between two numbers) ", function(list_of_numbers) {

    console.log(`${list_of_numbers}`);
    
    rl.close();
});

rl.on("close", function() {
    
    process.exit(0);
});