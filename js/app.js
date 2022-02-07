// Arrays

const cars = ['Mercedes', 'BMW', 'Audi', 'Citroen'];

// Object is a basic class

// Methods

cars.push('Renault');
cars.unshift('Tarantai');

const firstItem = cars.shift();
const lastItem = cars.pop();
console.log(firstItem);
console.log(lastItem);

console.log(cars);

console.log(cars.reverse());
console.log(cars);

const text = 'Hey! We are learning JavaScript';
const reverseText = text.split('').reverse().join('');
// split make an array with all elements , reverse reverses it , join makes it a string
console.log(reverseText);

const index = cars.indexOf('BMW');
cars[index] = 'Chevrolet';
console.log(cars);


const people = [
    {name: 'Dany', budget: 'rich'},
    {name: 'Fedor', budget: '2000'},
    {name: 'Max', budget: '4200'},
    
]

const indexComp = people.findIndex()