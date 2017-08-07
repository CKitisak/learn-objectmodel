const objModel = require('objectmodel');

const Course = objModel.Model(['math', 'english', 'history', 'science']);
const Grade = objModel.Model(['A', 'B', 'C']);
const FavoriteCourses = objModel.SetModel(Course);
const Gradebook = objModel.MapModel(Course, Grade)

const joannaGrades = new Gradebook([
    ['math', 'B'],
    ['english', 'C']
]);

joannaGrades.set('science', 'A');
console.log('set science grade to "A"');

joannaGrades.set('history', 'B');
console.log('set history grade to "B"');

// // ERROR: no videogame in course
// joannaGrades.set('videogames', 'A');

// // ERROR: invalid history grade
// joannaGrades.set('history', 'nope');

console.log('joannaGrades[science]:', joannaGrades.get('science'));
console.log('joannaGrades[history]:', joannaGrades.get('history'));
console.log('joannaGrades[english]:', joannaGrades.get('english'));
console.log('joannaGrades[math]:', joannaGrades.get('math'));

console.log('\n =============== \n');

const joannaFavorites = FavoriteCourses(['english']);
console.log('joannaFavorites:', joannaFavorites.values());

joannaFavorites.add('science')
console.log('added science to favorite');

// // ERROR: invalid course
// joannaFavorites.add('sleeping')

console.log('joannaFavorites:', joannaFavorites.values());
