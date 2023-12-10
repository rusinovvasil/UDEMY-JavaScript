/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');


// const interface = 'Audio';
// const private = 534;




// Function

function logger() {
    console.log('My name is Slim Shady');
}

// Calling / Running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

*/


// Function Declaration vs. Expressions

// Function Declaration

function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(1991);


// Function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calcAge2(1993);

console.log(age1, age2);