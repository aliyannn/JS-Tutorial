let score = "33abc"

// Two different yet same syntax for checking the type of the value. 
console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score); // score is converted to a number.
console.log(typeof valueInNumber); // Type of valueInNumber is number.
console.log(valueInNumber); //If the value contains letters with the number, then it will give NaN. Otherwise, it will give a number.

// "33" => converted to 33 i.e. number
// "33abc" => converted to NaN, because it contains letters with the number.
// true => 1 and false => 0

let someNumber = true;
console.log(typeof someNumber);
console.log(someNumber);

let convertSomeNumber = Number(someNumber);
console.log(typeof convertSomeNumber);
console.log(convertSomeNumber);

let anotherNumber = String(convertSomeNumber);
console.log(typeof anotherNumber);
console.log(anotherNumber);

anotherNumber = Boolean(convertSomeNumber);
console.log(typeof anotherNumber);
console.log(anotherNumber);