const objModel = require('objectmodel');

const NumberModel = objModel.BasicModel(Number);

let normalNumber = NumberModel(19);
console.log('normalNumber:', normalNumber);

let floatNumber  = NumberModel(5.39);
console.log('floatNumber:', floatNumber);

let stringNumber = NumberModel('90');
console.log('stringNumber:', stringNumber);
