const objModel = require('objectmodel');

const User = objModel.ObjectModel({
	email: String, // mandatory
	name: [String] // optional
});

// this is fine because name is optional
const kitsak = User({ email: "kitisak@myemail.com" });

// this will error because of missing "email"
const roger = User({ name: "Roger" });