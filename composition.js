const objModel = require('objectmodel');

const Person = objModel.ObjectModel({
	name: String,
	age: [Number]
});

const Lovers = objModel.ObjectModel({
	husband: Person,
	wife: Person
});

const joe = { name: 'Joe', age: 42 };
const ann = new Person({
	name: joe.name + '\'s wife',
	age: joe.age - 5
});

const couple = Lovers({
   husband: joe,  // object duck typed
   wife: ann // object model
});

couple.husband instanceof Person === true // object has been casted to Person
