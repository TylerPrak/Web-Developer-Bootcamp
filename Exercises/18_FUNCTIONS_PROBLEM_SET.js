function isEven(num) {
	if (num % 2 === 0)
		return true;
	else
		return false;
}

function factorial(num) {	
	for (var factorialSum = 1;num >= 1;num--)
		factorialSum *= num;
	return factorialSum;
}

function kebabToSnake(str) {
	var newStr = str.replace(/-/g , "_");
	return newStr;	

}
