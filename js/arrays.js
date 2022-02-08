// Arrays

const cars = ['Mercedes', 'BMW', 'Audi', 'Citroen'];
const fib = [1, 1, 2, 3, 5, 8, 13];

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
  { name: 'Dany', budget: 'rich' },
  { name: 'Fedor', budget: 2700 },
  { name: 'Max', budget: 4200 },
];

// How to find something in array

const indexComp = people.findIndex(function (person) {
  return person.budget === 4200;
});

const findPerson = people.find(function (person) {
  return person.budget === 4200;
});

const findPerson2 = people.find((person) => {
  person.budget === 2700;
});

console.log(people[indexComp]);
console.log(findPerson);
console.log(findPerson2);

let findedPerson;
for (const person of people) {
  if (person.budget === 2700) {
    findedPerson = person;
  }
}

console.log(findedPerson);

console.log(cars.includes('Mercedes'));

const upperCaseCars = cars.map((car) => {
  return car.toUpperCase();
});

// Method map always returns new array

console.log(upperCaseCars);

const pow3 = (num) => num ** 2;
const sqrt = (num) => Math.sqrt(num);

// const fib2Pow = fib.map(num => num ** 2)
// const fib2Pow = fib.map(pow3)

const fib2Pow = fib.map(pow3).map(sqrt);

// const fib2Pow = fib.map(pow3).map(Math.sqrt);

console.log(fib2Pow);

// Since map method return a new array we can continue use array methonds to this

const someFib = [1, 1, 2, 3, 5, 8, 13];

const someFib2Pow = fib.map(pow3);
const filteredNums = someFib2Pow.filter((num) => {
  num > 20;
});
// This type of fucntion is called callback function
// num - значение на каждой итерации массива in array fucntions

console.log(someFib2Pow);
console.log(filteredNums);

const allBudget = people
  .filter((person) => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget;
    return acc;
  }, 0);
//function (value that is reloading on each iteration, value will be saved) and startign value that we wanna start counting on
// Reduce - uses callback fucntion for each element in array, from left to right while keeping the interim result
// also it just takes all value from array and reduces them to one value
console.log(allBudget);
// Chaining - using ceveral metods in a row, like in allBudget

// You have to know all fundemental features, such as arrays and stuf,  even if you want to us javascript only for UI

const shoppingCart = [
  { name: 'Rice', price: 5 },
  { name: 'Book', price: 20 },
  { name: 'Chiken', price: 10 },
  { name: 'Monitor', price: 100 },
];

const reducedCart = shoppingCart.reduce((total, item) => {
  return total + item.price;
}, 0);

// function in reduce methods takes accamulator(the thing that we reducing our value to) as a value (total), and each individual item (item)

const somePeople = [
  { name: 'Kyle', age: 26 },
  { name: 'John', age: 31 },
  { name: 'Sally', age: 42 },
  { name: 'Jill', age: 26 },
];

const reducedPeople = somePeople.reduce((groupedPeople, person) => {
  const age = person.age;
  if (groupedPeople[age] == null) groupedPeople[age] = [];

  groupedPeople[age].push(person);
  return groupedPeople
}, {});

console.log(reducedPeople);

const numbers = [13, 2, 5];

const reducedNumbers = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(reducedNumbers);

const schoolSchedule = [
    {subject : 'English', amount: 2}, 
    {subject : 'Ukrainian', amount: 2},
    {subject : 'Ukrainian Literature', amount: 1},
    {subject : 'Class class', amount: 1},
    {subject : 'Math', amount: 2},  
];

const reducedSchedule = schoolSchedule.reduce((groupedSubjects, subject) => {
    const amount = subject.amount
    if (groupedSubjects[amount] == null)  groupedSubjects[amount] = []; 

    groupedSubjects[amount].push(subject);
    return groupedSubjects;
} , {})

console.log(reducedSchedule );