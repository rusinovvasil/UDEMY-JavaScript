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




// Arrow Functions

// Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Vasil'));
console.log(yearsUntilRetirement(1980, 'SlimShady'));

*/

// Functions Calling Other FUnctions

function cutFruitPueces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPueces(apples);
    const orangePieces = cutFruitPueces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));