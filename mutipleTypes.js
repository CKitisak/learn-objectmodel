const objModel = require('objectmodel');

const Animation = new objModel.ObjectModel({
	delay: [Number, String], // adding undefined will make delay is optional
	easing: [Boolean, String, undefined]
});

// // ERROR: delay is required but easing is optional
// const opening = new Animation(); 

const opening = new Animation({ delay: 300 });
console.log('opening:', opening);

opening.delay = "fast";
console.log('updated delay to "fast" success!');

// // ERROR: delay is accept only Number or String
// opening.delay = null;
// console.log('updated delay to "null" success!');

opening.easing = true;
console.log('updated easing to "true" success!');

// // ERROR: Number is not a valid type
// opening.easing = 1;