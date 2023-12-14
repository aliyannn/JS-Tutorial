// Primitive -> 7 types => String, Number, Boolean, null, undefined. Symbol, BigInt

// Reference (Non-Primitive) => Array, Objects, Functions.

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id);
// console.log(anotherId);

// console.log(id === anotherId)

const bigNumber = 13516366321386216586n;

// console.log(typeof bigNumber)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitve)

// When stack memory is used, you'll get a copy of the variable declared
// When heap memory is used, you'll get a reference of the original value

let myYoutubename = "aliyangohar";

let anotherName = myYoutubename;
anotherName = "allygohar";

console.log(myYoutubename);
console.log(anotherName);

// In the above code, since the type is primitive, hence stack is in use and we get a copy of the variable
// i.e. myYoutubename. A copy is given to the other variable, i.e. anotherName.
// Hence, myYoutubename value will not be changed.

let userOne = {
    email: 'aliyangohar@gmail.com',
    id: 123
}

let userTwo = userOne

userTwo.id = 321

console.log(userOne.id)
console.log(userTwo.id);