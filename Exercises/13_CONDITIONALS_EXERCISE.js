var age = prompt("How old are you?");
var square = Math.sqrt(age);

if (age < 0) {
	console.log("Error: Age is negative.");
}
else if (age == 21) {
	console.log("Happy 21st Birthday!");
}
else if (square^2 == age) {
	console.log("Your age is a Perfect Square!");
}
else if (age % 2 == 1) {
	console.log("Your age is odd!");
}
