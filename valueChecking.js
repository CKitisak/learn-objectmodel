const objModel = require('objectmodel');

const Shirt = new objModel.ObjectModel({
	// the only acceptable value is "clothes"
	category: 'clothes',

	// valid values: 38, 42, "S", "M", "L", "XL", "XXL"...
	size: [Number, 'M', /^X{0,2}[SL]$/],

	// valid values: "black", "#FF0000", undefined...
	color: ['black', 'white', new RegExp('^#([A-F0-9]{6})$'), undefined]
});

let tshirt = new Shirt({
	category: 'clothes',
	size: 'M'
});

// // ERROR: category must be "clothes" only
// tshirt.category = 'casual';

tshirt.size = 40;
console.log('set size to 40, success!');

// // ERROR: invalid value
// tshirt.size = '36';

// // ERROR: invalid value, accept value is white, black, and HEX
// tshirt.color = 'yellow';

tshirt.color = '#FFD700';
console.log('set color to yellow, success!');

// // ERROR: invalid value
// tshirt.color = null;

