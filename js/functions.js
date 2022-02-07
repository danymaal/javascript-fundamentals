// 1.Functions

// Function declaration
function greet(name) {
  console.log('Hey -', name);
}

// Function expression
const greet2 = function (name) {
  console.log('Hey -', name);
};

// const greet2 = function greet2 () {}

// The differnce is you can call function declaration before it initialize

// Function is actually an object

greet('John');

console.dir(greet);

// 2.Anomalous functions

let counter = 0;

const interval = setInterval(function () {
  if (counter === 8) {
    clearInterval(interval);
  } else {
    console.log(++counter);
  }
}, 1000);

// 3. Arrow functions

function some(word, letter) {
  console.log(word, letter);
}

// First way

const arrow = (word) => {
  console.log(word);
};

// Second way

const arrow2 = (word) => console.log(word);

some('Ventilation');
arrow('Cinematography');
arrow2('Penis');

// First way
const pow2 = (num) => {
  return num ** 2;
};

// Second name
const pow3 = (num) => num ** 2;

console.log(pow2(5));
console.log(pow3(6));

// 4. Defoult parameters

const sum = (a = 87, b = a * 2) => a + b;

console.log(sum(18));
console.log(sum());

function sumAll(...all) {
  let result = 0;
  for (let num of all) {
    result += num;
  }
  return result;
}

const res = sumAll(1, 2, 3, 4, 5, 6, 7);
console.log(res);

const colors = ['blue', 'green', 'yellow', 'orange', 'black', 'white'];

for (let color of colors) {
  console.log(color);
}


for(i = 0; i < colors.length; i++) {
    const color1 = colors[i]
    if (i < 6) {
        console.log(color1)
    } else {
        console.log('enough')
    }

}

// 5. Closures

function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}

const logWithLastName = createMember('Dany ');
console.log(logWithLastName('Mal'));
console.log(logWithLastName('Malin'));

