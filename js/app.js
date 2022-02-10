// DOM
// Even though JavaScript is able to work with DOM it is not actually a part of JS itself, JS just has acces to browser's API

const heading = document.getElementById('hello');

console.log(heading.textContent);

heading.textContent = 'Changed from JavaScript';
heading.style.color = 'green';
heading.style.textAlign = 'center';
heading.style.backgroundColor = 'black';
