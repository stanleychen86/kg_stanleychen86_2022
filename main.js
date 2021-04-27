


var nums = [];
//processed input
process.argv.forEach(function (val, index, array) {
  	if (index > 1){
  		nums.push(val);
  	}
});

var dict = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
output_string = "";

//conversion
for (var i = 0; i < nums.length; i++){
	temp_number = "";
	for (var j = 0; j < nums[i].length; j++){
		temp_number += dict[nums[i][j] - '0'];
	}
	temp_number += ",";
	output_string += temp_number;
	temp_number = "";
}

//trim the last comma
sz = output_string.length;
output_string = output_string.substring(0, sz-1)
//answer
console.log(output_string);








