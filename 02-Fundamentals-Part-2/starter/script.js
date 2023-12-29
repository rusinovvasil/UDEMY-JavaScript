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



// Reviewing Functions

const calcAge = function (year) {
    return 2023 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {

    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🍾`);
        return -1;
    }

    // return
}

console.log(yearsUntilRetirement(1991, 'Vasil'));
console.log(yearsUntilRetirement(1950, 'Mike'));



// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1991, 1994, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years.length - 1);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);




// Basic Array Operations
const friends = ['Michael', 'Steven', 'Peter'];

const newLength = friends.push('Jay'); // Add in last positionelements
console.log(friends);
console.log(newLength);

friends.unshift('John'); // Add in beginning
console.log(friends);

friends.pop(); // Remove last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Remove the first element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
    console.log("You have a friend called Peter");
} else {
    console.log("You don't have a friend called Peter");
}

*/


// Introduction to Objects
const vasilArray = [
    'Vasil',
    'Rusinov',
    2023 - 1991,
    'driver',
    ['Michael', 'Peter', 'Steven']
];

const vasil = {
    firstName: 'Vasil',
    lastName: 'Rusinov',
    age: 2023 - 1991,
    job: 'driver',
    friends: ['Michael', 'Peter', 'Steven']
};

// Dot vs. Bracket Notation
console.log(vasil);

console.log(vasil.lastName);
console.log(vasil['lastName']);

const nameKey = 'Name';
console.log(vasil['first' + nameKey]);
console.log(vasil['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Vasil? Chose between firstName, lastName, age, job, and friends');

if (vasil[interestedIn]) {
    console.log(vasil[interestedIn]);
} else {
    console.log('Wrong request! Chose between firstName, lastName, age, job, and friends');
}

vasil.location = 'Bulgaria';
vasil["instagram"] = '@rusinov28';
console.log(vasil);

// Challenge
// "Vasil has 3 friends, and his best friend called Michael"
console.log(`${vasil.firstName} has ${vasil.friends.length} friends, and his best friend called ${vasil.friends[0]}`);