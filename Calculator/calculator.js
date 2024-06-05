let first = '';
let second = '';
let operator = '';
let displayValue = '';
const displayParagraph = document.querySelector('#display')
document.querySelector('#clear').addEventListener('click', () => {
    first = '';
    second = '';
    operator = '';
    showDisplay();
})
document.querySelector('#operators').childNodes.forEach((elem) => {
    elem.addEventListener('click', () => populateOperator(elem.textContent))
})
document.querySelector('#equals').addEventListener('click', () => {
    first = operate(first, second, operator);
    operator = '';
    second = '';
    showDisplay();
})

function populateNumbers(num) {

    if(!operator) {
        if(!first) first = num;
        else first += num;
    } else {
        if(num === 0 && operator === '/') console.log('Error');
        else if(!second) second = num;
        else second += num;
    }

    showDisplay();
}

function populateOperator(op) {
    
    if(!first || (first && second)) console.log('Error');
    else {
        operator = op;
    }

    showDisplay();
}

const showDisplay = function() {

    displayValue = first + operator + second;

    displayParagraph.textContent = displayValue;
}

const addNumbers = function() {

    const numbersDiv = document.querySelector('#numbers');

    for(let i = 1; i <= 9; i++) {

        const button = document.createElement('button');
        button.classList.add("key");
        button.textContent = i;
        button.addEventListener('click', () => populateNumbers(button.textContent));
        numbersDiv.appendChild(button);
    }

    document.querySelector('#zero').addEventListener('click', () => populateNumbers(0));
}

addNumbers();

const add = function(a, b) {
    return +a + +b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return round(a / b, 2);
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

const operate = function(num1, num2, op) {
    
    let result;
    switch(op) {
        case '+': 
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = "N/A";
            break;
    }
    return result;
}