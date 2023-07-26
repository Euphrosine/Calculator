let display = document.getElementById('display');
let currentValue = '0';
let firstNumber = null;
let operator = null;

function appendNumber(num) {
    if (currentValue === '0') {
        currentValue = num.toString();
    } else {
        currentValue += num.toString();
    }
    display.value = currentValue;
}

function setOperator(op) {
    firstNumber = parseFloat(currentValue);
    operator = op;
    currentValue = '0';
}

function calculate() {
    if (operator && firstNumber !== null) {
        const secondNumber = parseFloat(currentValue);
        const result = operate(operator, firstNumber, secondNumber);
        display.value = result;
        currentValue = result.toString();
        operator = null;
        firstNumber = null;
    }
}

function clearDisplay() {
    currentValue = '0';
    display.value = currentValue;
    firstNumber = null;
    operator = null;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            throw new Error("Invalid operator.");
    }
}
