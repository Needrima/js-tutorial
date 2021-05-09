"use strict"

let str = "Hello World...... This is ES6";

//string methods
//method startsWith();
console.log(str.startsWith("Hello")); //true

//endsWith();
console.log(str.endsWith("ES6")); //false

//includes();
console.log(str.includes("a")); //false

//ES6 also has support for new number types
//Hexadecimal
console.log(0xFF); // x- hexadecimal

//Binary
console.log(0b101011); // b- binary

//Octal
console.log(0o543); // o- Octal
  
// Some Number methods
console.log(Number.isFinite(3)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(1)); // false
console.log(Number.isNaN("one")); // false
console.log(Number.isInteger(5))//true
console.log(Number.isInteger(-8))//true
console.log(Number.isInteger(4.5))//false