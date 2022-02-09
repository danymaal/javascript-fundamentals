// Objects - the most important part of JavaScript

const person = {
  name: 'Dany',
  age: 17,
  isEntrepreneur: true,
  languages: ['en, ru, ua, es'],
  'complex key': 'complex value',
  ['key_' + (1 + 3)]: 'Computed key',
  greet() {
    console.log('greet from person');
  },
  info() {
    console.info('this', this);
    console.info('Info about person with the name', this.name);
  },
};

// Functions inside object are actually methods
console.log(person.name);
const ageKey = 'age';
console.log(person[ageKey]);
console.log(person['complex key']);

person.greet();

person.age++;

person.languages.push('it');

delete person['key_4'];

console.log(person);

// const name = person.name;
// const age = person.age;
// const languages = person.languages;

const { name: personName = 'human', age: personAge, languages } = person;
// You can assgn default value to a variable and give varibales specific name

console.log(personName, personAge, languages);

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('key:', key);
    console.log('value', person[key]);
  }
}

// Для собеса: фор ин опасен тем, что пробигается не только по ключам своего объекта, но также может заходить в его прототип. Из-за этого могут возникать определенные проблемы. Чтобы это предотвратить, нужно добавить иф /hasOwnProperty(key)

Object.keys(person).forEach((key) => {
  console.log('key:', key);
  console.log('value', person[key]);
});

// Такой метод не пробигается по прототипу

// Context
person.info();

const logger = {
  keys() {
    console.log('Object Keys', Object.keys(this));
  },
  keysAndValues(key) {
    Object.keys(this).forEach((key) => {
      console.log(`${key} : ${this[key]}`);
    });
  },

  withParams(top = false, between = false, bottom = false) {
      if (top) {
          console.log('------Start------');
      }  
    Object.keys(this).forEach((key, index, array) => {
        console.log(`${key} : ${this[key]}`);
        if (between && index !== array.length - 1 ) {
            console.log('---------------');
        }  
      });
      if (bottom) {
        console.log('------End------');
    }  
  }
};

// Если бы мы в keysAndValues использовали не стрелочную функцию, а через слово function то мы бы столкнулись с проблемой, так как слово function задает свой контекст и второй this (${this[key]) это уже не  первый this (Object.keys(this)).
// Это можно было бы решить путем созданием своего контекста просто пред методом задать const self = this, и использовать вместо ${this[key] - ${self{[key]. Или же там где заканчивается функция добавит bind(this) 
// А стрелочные функции не создают свой контекст

const bound = logger.keys.bind(person);
// .bind() returns a function
// С помощь .bind() мы говорим, что можно, пожалуйста, в этом методе (keys), this будет тем объектом, который мы сами передадим
bound();

logger.keys.call(person);
// Отличие: банд создает функцию и мы можем использовать ее когда хотим, колл же байндит функция и потом сразу ее вызывает

const keysAndV = logger.keysAndValues.bind(person);
keysAndV();

logger.withParams.call(person, true, true, true)
// Первое значение в скобках отвечает чей контекст


logger.withParams.apply(person, [true, true, true])
// Apply is different from call only because apply gets only two values and second is always array
