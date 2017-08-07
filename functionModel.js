const assert = require('assert');
const objModel = require('objectmodel');

const Operand = objModel.BasicModel(Number).assert(Number.isFinite);
const Operator = objModel.BasicModel(['+', '-', '*', '/'])

const Calculator = objModel.FunctionModel(Operand, Operator, Operand).return(Operand);

const calc = new Calculator(function (a, operator, b) {
    return eval(a + operator + b);
});

console.log(calc(2, '/', 2));
console.log(calc(2, '*', 0));

// // ERROR: result is `infinity value`
// console.log(calc(2, '/', 0));

// // ERROR: `null` is not number
// console.log(calc(2, '+', null));