// 1. Number

const num = 42; // integer
const float = 42.37; // float
const pow = 10e3; //

console.log(pow);
console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);
// In console Number. for all type of numbers

console.log('Math.pow 53', Math.pow(2, 53) - 1);

console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER);

console.log('MAX_VALUE', Number.MAX_VALUE);

console.log('MIN_VALUE', Number.MIN_VALUE);

console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY);
console.log('POSITIVE_INFINITY', Number.NEGATIVE_INFINITY);

console.log('1 / 0', 2 / 0);

console.log(Number.NaN); // Not a Number

const weird = 2 / undefined;
console.log(isNaN(weird));

console.log(isFinite(Infinity));
console.log(isFinite(42));

const stringInt = '87';
const stringFloat = '87.87';

console.log(parseInt(stringInt) + 2); // parseInt converts string to a integer - most common
console.log(Number(stringInt) + 2); // Number converts string to a integer
console.log(+stringInt + 2); // + converts string to a integer

console.log(parseFloat(stringFloat) + 2); // parseFloat converts string to a float
console.log(+stringFloat + 2); // + converts string to a integer

console.log(0.4 + 0.2);
console.log((0.4 + 0.2).toFixed(1));
console.log(parseFloat((0.4 + 0.2).toFixed(1)));

// 2. BigInt

console.log(typeof 9007199254740991n);
console.log(9007199254740991n - 9007199254740991n);
// console.log(9007199254740991.121212n); decimal is restricted

console.log(10n + BigInt(5));

console.log(5n / 2n);

// 3. Math

console.log(Math.E);
console.log(Math.PI);

console.log(Math.sqrt(25));

console.log(Math.pow(5, 3));

console.log(Math.abs(-42));

console.log(Math.max(87, 22, 14, 332));
console.log(Math.min(87, 22, 14, 332));

console.log(Math.floor(87.8));
console.log(Math.ceil(87.2));
console.log(Math.round(23, 2));
console.log(Math.trunc(23, 2));

console.log(Math.random());

// 4. Example

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomBetween(10, 57));
