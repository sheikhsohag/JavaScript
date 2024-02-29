// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) 
//     {
//         console.log(arg);
//         sum += arg;
//     }
//     return sum;
//   }
  
//   let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
//   console.log(x);

//   =====================================

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(x);