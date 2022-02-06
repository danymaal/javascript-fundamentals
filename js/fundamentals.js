// alert(2);

// 1. Variables

const firstName = 'Dany';
let age = 26;

age = 17;

console.log('Все складывается для меня наилучшим образом');
console.log(age);

// 2. Mutation

console.log('His name is ' + firstName + ' he is ' + age);

// const giveName = prompt('Enter your name');

console.log('The name of the person is ' + firstName);

// 3. Operators

let year = 2022;
const birthYear = 2004;

const isNow = year - birthYear;
console.log(isNow);

const a = 10;
const b = 5;

let c = 32;

// c = c + a
c += a;
// c -= a; = c = c - a
// c *= a; = c = c * a
// c /= a; = c = c / a

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(year++);

// year++ = year + 1
// year-- = year - 1

console.log(++year);
console.log(--year);

console.log(c);

// 4. Data types
const isEntrepreneur = true;
const sex = 'male';
const goose = 3;
let x;

// console.log(typeof isEntrepreneur);
console.log(typeof isEntrepreneur);
console.log(typeof sex);
console.log(typeof goose);
console.log(typeof x);
console.log(null);

// 5. Operator precedende

// just look it up on mdn

// 6. Conditional operators

const courseStatus = 'pending';

if (courseStatus === 'ready') {
  console.log('Course is ready');
} else if (courseStatus === 'pending') {
  console.log('Course is being developed');
} else {
  console.log('Course got failed');
}

// Equal operator
// == checks only value - you can lowkey forget about it
// === cheacks value and data type

const num1 = 42;
const num2 = '42';

console.log(num1 === num2);

const isReady = true;

if (isReady) {
  console.log('Everything is Ready');
} else {
  console.log('Everything is NOT ready');
}
// ===
// Conditional (ternary) operator
isReady ? console.log('Everything is Ready') : console.log('Everything is NOT ready');
// the same

// 7. Logical operators

// && - AND (true - if both true,  else false)
// || - OR (true - if at least one is true)
// !true = false    !! true = true   !!!true = false and so on

// 8. Functions

function calcAge(year) {
  return 2022 - year;
}

console.log(calcAge(2004));

function logUserInfo(name, year) {
  const curAge = calcAge(year);

  if (curAge > 0) {
    console.log('The person name ' + name + ' is ' + curAge + ' days old');
  } else {
    console.log('It is the future tho');
  }
}
// we don't have to write log because it's already inside THIS function
logUserInfo('Dany', 2004);
logUserInfo('Dany', 2222);

// 9. Arrays
const cars = ['BMW', 'Mercedes', 'Ford'];

// const cars2 = new Array('Toyota' , 'Volvo' , 'Fiat');

cars[1] = 'Ferrari';
cars[cars.length] = 'Lamborghini';

console.log(cars);
console.log(cars[1]);
console.log(cars.length);
console.log('------');
cars[2] = 'Ferrari';

// 10. Loops

const cars3 = ['Maseratti', 'Rolls-Royce', 'Bugatti'];

//  starting value, while should it working, what should be done after each iteration
// 1 way
for (i = 0; i < cars3.length; i++) {
  const car = cars3[i];
  console.log(car);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// 2 way (better)
for (let car of cars3) {
  console.log(car);
}

// 11. Objects

const person = {
  firstName: 'Dany',
  lastName: 'Malinskyi',
  year: 2004,
  languages: ['Ru', 'Ua', 'En', 'Es'],
  isHasWife: true,
  greet: function () {
    console.log('greet from person');
  },
  isDrinkingWater: false,
};

console.log(person.firstName);

console.log(person['lastName']);

const key = person['languages'];
console.log([key]);

person.greet();

person.isDrinkingWater = true;
person.isEntrepreneur = true;
console.log(person);
