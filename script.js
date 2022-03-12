let container = document.querySelector("#container");

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
        case "add":
            add(a, b);
            break;
        case "subtract":
            subtract(a, b);
            break;
        case "multiply":
            multiply(a, b);
            break;
        case "divide":
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
container.appendChild(display1);
display1.textContent = displayArr;


// clear button
const clear = document.createElement("div");
clear.classList.add("clear");
container.appendChild(clear);
clear.textContent = "=";
clear.addEventListener("click", () => {
    
})

// equal sign
// have to capture button presses 
const equal = document.createElement("div");
equal.classList.add("equal");
container.appendChild(equal);
equal.textContent = "=";
equal.addEventListener("click", () => {
    equalsEval();
})

// calls the operate function
function equalsEval(){
    const oper = displayArr.find(element => element == '+' || element == '-' || element == 'x' || element == '/');
    const operIndex = displayArr.findIndex(operand);
    const value1 = displayArr.slice(0, operIndex);
    const value2 = displayArr.slice(operIndex+1);
    let num1 = Number(value1.join(''));
    let num2 = Number(value2.join(''));
    let evaluate = operate(oper, num1, num2);
    display1.textContent = evaluate;
}

// creates the operator buttons
function createOperands(){
    let operArr = ['+', '-', 'x', '/'];
    for (i of operaArr){
        let operand = document.createElement("div");
        operand.classList.add("operand");
        container.appendChild(operand);
        operand.textContent = i;
        operand.addEventListener("click", () => {
            displayArr.push(i);
        })
    }
}

// creates a digit button
function createDigit(num){
    let button = document.createElement("div");
    button.classList.add("button");
    container.appendChild(button);
    button.textContent = num;
    button.addEventListener("click", () => {
        displayArr.push(num);
    })
}

let buttonArr = [];

// calls the createDigit function
for(let i = 0; i < 10; i++){
    buttonArr.push("Button" + i);
    createDigit(i);
}

