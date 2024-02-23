// // To understand this, you have to understand the term "hoisting".

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// Variables defined with let and const are hoisted to the top of the block, but not initialized.

// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// Using a let variable before it is declared will result in a ReferenceError.

// The variable is in a "temporal dead zone" from the start of the block until it is declared:

x = 12;
console.log(x);

var x;

// here var x concider top of scope ... and initiaze undefined
// let also be hoisting but not initize undefined that's why does not c
// create memory location...

// for const it will be syntax error cause it is not possible.. const initialize simultenioously
