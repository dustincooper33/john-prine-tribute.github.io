let myVariable = "Bob";
myVariable;
console.log(myVariable);

function multiply(num1, num2) {
	let result = num1 * num2;
	let msg = num1.toString() + " * " + num2.toString() + " = " + result.toString();
	console.log(msg);
	return result;
  }

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
  