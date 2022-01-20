let inputDisplay = document.querySelector('#input');
let resultDisplay = document.querySelector('#result');
let buttons = document.getElementById('btnContainer');

let num1 = null;
let num2 = null;
let newOperator = null;
let oldOperator = null;
let tracker = null;
let result = 0;

const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return b - a;
};

function multiply (a,b) {
    return a * b;
};

function divide(a,b) {
    return a / b;
}

function operate (operator, a, b) {
    let opResult = 0;
    if (operator == '+') {
        opResult = add(a,b);
    } if (operator == '-') {
        opResult = subtract(a,b);
    } if (operator == '*') {
        opResult = multiply(a,b);
    } if (operator == '/') {
        opResult = divide(a,b);
    } if (operator == '=') {
        opResult = result;
    }
    return opResult;
}

function displayInput (buttonId) {
    let inputNum = document.createElement("span");
    let displayNum = document.createTextNode(buttonId);
    inputNum.appendChild(displayNum);
    inputDisplay.appendChild(inputNum);
}

function displayResult (result) {
    let resultNum = document.createElement("span");
    let displayRes = document.createTextNode(result.toString());
    resultNum.appendChild(displayRes);
    resultDisplay.appendChild(resultNum);
}

buttons.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    if (event.target.className == "numBtn") {
        if (['+', '-', '*', '/'].indexOf(tracker) >= 0) {
            resultDisplay.innerText="";
        }
        tracker = event.target.id;
        displayInput(event.target.id);
        displayResult(event.target.id);
    };

    if (event.target.className == "opBtn") {
        oldOperator = newOperator;
        tracker = newOperator = event.target.id;

        displayInput(event.target.id);
        
        if (num1 == null) {
            num1 = parseInt(resultDisplay.innerText);
            resultDisplay.innerText="";
        } else if (num2 == null) {
            num2 = num1;
            num1 = parseInt(resultDisplay.innerText);
            resultDisplay.innerText="";
        } else {
            num2 = result;
            num1 = parseInt(resultDisplay.innerText);
            resultDisplay.innerText="";
        }

        if (num2 != null) {
            resultDisplay.innerText="";
            result = operate(oldOperator,num1,num2);
            displayResult(result);
        }
    };
    
    if (event.target.className == "clearBtn") {
        inputDisplay.innerText = "";
        resultDisplay.innerText  = "";
    };

    if (event.target.className == "equalBtn") {
        if (newOperator != null) {
            oldOperator = newOperator;
            tracker = newOperator = event.target.id;
            
            if (num1 == null) {
                num1 = parseInt(resultDisplay.innerText);
            } else if (num2 == null) {
                num2 = num1;
                num1 = parseInt(resultDisplay.innerText);
                resultDisplay.innerText="";
            } else {
                num2 = result;
                num1 = parseInt(resultDisplay.innerText);
                resultDisplay.innerText="";
            }
    
            if (num2 != null) {
                resultDisplay.innerText="";
                result = operate(oldOperator,num1,num2);
                displayResult(result);
            }
        }

    };
});
