// Strings

const firstName = 'Dany';
const age = 17;
const birthYear = 2004;

function getAge() {
  return age;
}

const output = `Hey! My name is ${firstName} and I'm ${getAge()}. I was born in ${
  birthYear <= 2004 ? 'A' : 'B'
}`;

// You can use ternary operators here

console.log(output);

console.log(firstName.length);

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

console.log(firstName.charAt(2));

console.log(firstName.indexOf('ny'));

console.log(firstName.toLowerCase().startsWith('d'));
console.log(firstName.endsWith('y'));

console.log(firstName.repeat(3));

const pass = '     password     ';

console.log(pass.trim());
console.log(pass.trimStart());
console.log(pass.trimEnd());

function logPerson(s, name, age) {
  if (age < 0) {
    age = 'Have not born yet';
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = 'Dany';
const personName2 = 'Valera';
const personAge = 17;
const personAge2 = -10;

const output3 = logPerson`Name: ${personName} , age: ${personAge}!`;
const output4 = logPerson`Name: ${personName2} , age: ${personAge2}!`;

console.log(output3);
console.log(output4);
