// let output = "";
// let buttons = document.querySelectorAll(".button");
// Array.from(buttons).forEach((button) => {
// 	button.addEventListener("click", (e) => {
// 		console.log(e.target.InnerHTML);
// 		output = output + e.target.InnerHTML;
// 		document.querySelector("input").value = output;
// 	});
// });

const buttons = document.querySelectorAll(".buttons button");
const display = document.querySelector(".display");
console.log(buttons);
let displayValue = "0";
let operator;
let firstValue;
let secondValue;

buttons.forEach((button) => {
	button.addEventListener("click", function () {
		const value = this.innerText;
		if (value === "AC") {
			displayValue = "0";
			operator = undefined;
			firstValue = undefined;
			secondValue = undefined;
		} else if (
			value === "/" ||
			value === "*" ||
			value === "-" ||
			value === "+"
		) {
			operator = value;
			firstValue = displayValue;
			displayValue = "0";
			// displayValue += operator;
		} else if (value === ".") {
			if (!displayValue.includes(".")) {
				displayValue += ".";
			}
		} else if (value === "=") {
			secondValue = displayValue;
			displayValue = calculate(firstValue, operator, secondValue);
		} else {
			if (displayValue === "0") {
				displayValue = value;
			} else {
				displayValue += value;
			}
		}
		display.innerText = displayValue;
	});
});

function calculate(firstValue, operator, secondValue) {
	let result;
	switch (operator) {
		case "/":
			result = parseFloat(firstValue) / parseFloat(secondValue);
			break;
		case "*":
			result = parseFloat(firstValue) * parseFloat(secondValue);
			break;
		case "-":
			result = parseFloat(firstValue) - parseFloat(secondValue);
			break;
		case "+":
			result = parseFloat(firstValue) + parseFloat(secondValue);
			break;
		default:
			return secondValue;
	}
	return result;
}
