const objModel = require('objectmodel');

const Order = new objModel.ObjectModel({
    product: {
        name: String,
        quantity: Number
    },
    orderDate: Date
});

let myOrder = new Order({
    product: {
        name: 'Apple Pie',
        quantity: 1
    },
    orderDate: new Date()
});

console.log('myOrder:', JSON.stringify(myOrder, null, 2));

myOrder.product.quantity = 2;
console.log('set product quantity to two success!');

myOrder.product.quantity += 1;
console.log('set product quantity by adding one (number) success!');

// // this will error because got string "31"
// myOrder.product.quantity = myOrder.product.quantity + '1';
// console.log('set oproduct quantity by adding one (string) success!');

myOrder.orderDate = new Date(1502010129000);
console.log('set order date with timestamp success!');

// // this will error because timestamp is not "Date Object"
// myOrder.orderDate = 1502080729000;
// console.log('set order date with timestamp (number) success!');

// // this will error too because got string "1502080129000"
// myOrder.orderDate = '1502080129000';
// console.log('set order date with timestamp (string) success!');

console.log('myOrder:', JSON.stringify(myOrder, null, 2));
