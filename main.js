const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var nums = [];

rl.question("enter your array please! (add a space between two numbers) ", function(list_of_numbers) {
	temp_string = "";
	for (var i = 0; i < list_of_numbers.length; i++){
		if (list_of_numbers[i] == ' '){
			nums.push(temp_string);
			temp_string = "";
		} else {
			temp_string += list_of_numbers[i];
		}
	}
	nums.push(temp_string);

	for (var i = 0; i < nums.length; i++){
		console.log(nums[i]);
	}

    console.log(`${list_of_numbers}`);

    rl.close();
});

rl.on("close", function() {
    process.exit(0);
});