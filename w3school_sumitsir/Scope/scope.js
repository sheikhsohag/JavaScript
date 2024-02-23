
// myFunction();

// console.log(carName);

// // If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

// // This code example will declare a global variable carName, even if the value is assigned inside a function.
// function myFunction() {
//   carName = "Volvo";
// }

// console.log(carName);

// ======================================

let value = 23;
const val = 4;

function myFunction()
{
    const value =9;
    console.log(value);
    const val = 40;
      console.log(val);
}
console.log(value);

myFunction();

console.log(value);