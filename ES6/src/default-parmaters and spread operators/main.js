"use strict"

//lets have a function greet
function greet($greeting) {
    console.log($greeting);
}

greet("Hello world");

//if we try to run greet without a value
greet(); // undefined

//to give it a default parameter

function greeting($greeting = "hello world") {
    console.log($greeting);
}

greeting();

// spread operator
// represented as three dots (...)

let args = [1,2,3];
let args2 = [4,5,6];

// instead of passing args directly into a function as an arguement
/*
    function print(args) {
        console.log(args)
    }

    print(args)
*/

//or

/*
function print(){
    console.log(args)
}

print.apply(null, args); gives the length of the array and also the array
*/ 

//with the spread operator we can do
function print(){
    console.log(args+ ","+ args2)
}

print(...args); // same as print.apply(null, args)

print(...args, ...args2);

