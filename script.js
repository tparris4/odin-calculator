let container = document.querySelector("#container");
let numbers = document.querySelector('.numbers');
let operators = document.querySelector('.operators');
let displayBox = document.querySelector('.displaybox');


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b == 0){
        return ("Cannot divide by 0")
    }
    return a / b;
}

function operate(operator, a, b){
    const operate = operator;
    switch (operate){
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "x":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
        default:
            return "Error?";
    }

}

// main display
// global array
let displayArr = [];
// let displayArr2 = [];
let display1 = document.createElement("div");
display1.classList.add("display1");
displayBox.appendChild(display1);
display1.textContent = "Tyler's Calculator";
const operArr = ['+', '-', '*', '/'];


// clear button
const clear = document.createElement('button');
clear.classList.add("clear");
operators.appendChild(clear);
clear.textContent = "C";
clear.addEventListener("click", () => {
    for(i of displayArr){
        displayArr.pop();
    }    
    display1.textContent = displayArr; 
})

// equal sign
// have to capture button presses 
const equal = document.createElement('button');
equal.classList.add("equal");
operators.appendChild(equal);
equal.textContent = "=";
equal.addEventListener("click", () => {
    equalsEval();
})

// calls the operate function
function equalsEval(){
    // const check = displayArr.every()
    const oper = displayArr.find(element => element == '+' || element == '-' || element == 'x' || element == '/');
    const operIndex = displayArr.findIndex(oper);
    const value1 = displayArr.slice(0, operIndex);
    const value2 = displayArr.slice(operIndex+1);
    let num1 = Number(value1.join(''));
    let num2 = Number(value2.join(''));
    displayArr.splice(operIndex, 1);
    let evaluate = operate(oper, num1, num2);
    display1.textContent = evaluate;
}

// creates the operator buttons
function createOperands(){
    let operArr = ['+', '-', 'x', '/'];
    for (i of operArr){
        let operand = document.createElement('button');
        operand.classList.add("operand");
        operators.appendChild(operand);
        operand.textContent = i;
        operand.addEventListener("click", () => {
            const displayStr = displayArr.toString();
            if(displayStr.some(el => operArr.includes(el))){
                equalsEval();
            }

            displayArr.push(i);
            let displayArrJoin = displayArr.join("");
            display1.textContent = displayArrJoin; 
        })
    }
}

// creates a digit button
function createDigit(num){
    let digits = document.createElement('button');
    digits.classList.add("digits");
    numbers.appendChild(digits);
    digits.textContent = num;
    digits.addEventListener("click", () => {
        displayArr.push(num);
        let displayArrJoin = displayArr.join("");
        display1.textContent = displayArrJoin; 
    })
}

let buttonArr = [];

// calls the createDigit function
for(let i = 9; i >= 0; i--){
    buttonArr.push("Button" + i);
    createDigit(i);
}
createOperands();

