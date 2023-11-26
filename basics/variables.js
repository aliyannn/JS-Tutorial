const accountID = 12345;
let accountEmail = "aliyan@gmail.com";
var accountPassword = "112233";
accountCity = "Lahore";
let accountState;

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);

// accountID = 1223;

accountEmail = "aliyangohar@gmail.com"
accountPassword = "123123";
accountCity = "Islamabad"
accountState = "Punjab"

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);

/* Prefer not to use VAR because of issue in block and functional variable */
// console.table is used to print all values in bulk
// It is not a good practice to assign a variable without defining its data type