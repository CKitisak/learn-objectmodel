const objModel = require('objectmodel');

const Person = objModel.ObjectModel({
	name: String,
	female: Boolean
});

const Mother = Person.extend({
	female: true,
	child: Person
});

let joe = new Person({ name: "Joe", female: false });
let ann = new Person({ name: "Ann", female: true });
let joanna = new Person({ name: "Joanna", female: true });

ann = new Mother({ name: "Ann", female: true, child: joanna })

// // ERROR: joe is not female
// joe = Mother(joe);

console.log('Is Ann instanceof Mother:', ann instanceof Mother);
console.log('Is Ann instanceof Person:', ann instanceof Person);

console.log('Is Joanna instanceof Mother:', joanna instanceof Mother);
console.log('Is Joanna instanceof Person:', joanna instanceof Person);

console.log('Is Joe instanceof Mother:', joe instanceof Mother);
console.log('Is Joe instanceof Person:', joe instanceof Person);
