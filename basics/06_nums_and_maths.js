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
console.log(balance.toFixed(1));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++