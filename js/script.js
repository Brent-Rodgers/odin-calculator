const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const multiply = function(a, b) {
	return a * b
};

const divide = function(a, b) {
	return a / b
};

const operate = function(fn, a, b) {
    return fn(a,b)
}

const op_dict = {
    "add": add,
    "subtract": subtract,
    "divide": divide,
    "multiply": multiply
}

let display_value = "";
let value = ""
const display = document.getElementById("display")
let first_operand = null
let second_operand = null
let operator = null

const populate_display = function(value) {
    // display_value = value
    display.textContent = value;
}

const num_buttons = document.querySelectorAll('.number-button');
const op_buttons = document.querySelectorAll('.operator-button');
const equals_button = document.querySelectorAll('.equals-button');

num_buttons.forEach(button => button.addEventListener('click', function(){
    if (!operator) {
        value += button.dataset.num
        populate_display(value);
    }
}, false));

op_buttons.forEach(button => button.addEventListener('click', function(){
operator = button.dataset.num
console.log(operator)
if (!first_operand){
    first_operand = value;
    value = "";
} else {
    second_operand = value;
    value = operate(
        op_dict[operator], 
        Number(first_operand), 
        Number(second_operand)
        )
    first_operand = value
    populate_display(value);
    console.log(value)
    value = ""
}
operator = null
}, false));

equals_button.forEach(button => button.addEventListener('click', function(){
    if (!operator){
        first_operand = value;
        value = "";
    } else {
        second_operand = value;
        value = operate(op_dict[operator], Number(first_operand), Number(second_operand))
        first_operand = value
        populate_display(value);
        console.log(value)
        value = ""
    }
}))

// if (first_operand && second_operand && operator){
//     operate(op_dict[operator], Number(first_operand), Number(second_operand))
// }