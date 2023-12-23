const name = 'Aliyan';
const repoCount = 50;


// console.log(name + repoCount + ' Value');

console.log(`${name} has ${repoCount} repositories`);

// How to declare a string
const gameName = new String('AliyanAG');

// console.log(gameName[0]);
// console.log(gameName.__proto__)

console.log(gameName.length);

// toUpperCase without parenthesis () will be used to store a reference in it. For example;
// let myString = 'Hello World';
// let myFunc = myString.toUpperCase;
// console.log(myFunc());

// toUpperCase with paranthesis () is a method in JS to convert a string to uppercase.
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-7, 4);
console.log(anotherString);

const newStringOne = "  Aliyan  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aliyangohar.com/aliyan%20gohar";
console.log(url.replace('aliyan%20gohar', 'aliyan'));

console.log(url.includes('%20'));

const newStringTwo = new String('Aliyan-Gohar');

console.log(newStringTwo.split('-'));