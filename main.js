const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var nums = [];

rl.question("enter your array please! (add a space between two numbers) ", function(list_of_numbers) {
	var dict = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
	output_string = "";
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
		temp_number = "";
		for (var j = 0; j < nums[i].length; j++){
			temp_number += dict[nums[i][j] - '0'];
		}
		temp_number += ",";
		output_string += temp_number;
		temp_number = "";
	}
	sz = output_string.length;
	output_string = output_string.substring(0, sz-1)
	console.log(output_string);

    // console.log(`${list_of_numbers}`);

    rl.close();
});

rl.on("close", function() {
    process.exit(0);
});