// +++++++++++++++++++++++++ Numbers +++++++++++++++++++++++++

const score = 400;
console.log(score);

const balance = new Number(100); // Defines a new number with strictly the type of NUMBER. Typeof is object.
console.log(balance);

console.log(balance.toString()); // Converts number to string.

// console.log(typeof(score));
// console.log(typeof(balance));
// console.log(typeof(balance.toString()));

// console.log(balance.length);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // Changes negative values to positive.
console.log(Math.round(4.5)); // Rounds decimal values to higher if greater than equal to five, else lower value.
console.log(Math.ceil(4.1)); // Returns greater value even if not greater than or equal to five.
console.log(Math.floor(4.9)); // Returns lower value even if greater than or equal to five.
console.log(Math.min(4, 3, 6, 8)); // Returns the minimum value
console.log(Math.max(4, 3, 6, 8)); // Returns the maximum value

console.log(Math.random());
console.log(Math.random() + 1);
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

// Basic formula of getting random numbers between the desired range
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
