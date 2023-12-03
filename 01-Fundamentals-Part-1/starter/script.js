/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Vasil');
console.log(23);

let firstName = 'Vasil';
console.log(firstName);

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);  // boolean
console.log(typeof 28);
console.log(typeof 'Vasil');

javascriptIsFun = 'Yes';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year); // undefined

year = 1991;
console.log(typeof year); // number

console.log(typeof null); // object is not corrected in legacy reasons


let age = 30; // declare variable
age = 31; // that changes from 30 to 31

const birthYear = 1991; // const can not be changed
birthYear = 1990; // it should not work


// Math operators
const now = 2023;
const ageVasil = now - 1991;
const ageSarah = now - 2018
console.log(ageVasil, ageSarah);

console.log(ageVasil * 2, ageVasil / 10, 2 ** 3);
// 2 ** means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Vasil';
const lastName = 'Rusinov';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageVasil > ageSarah); // result = true
console.log(ageSarah >= 18); // result is false. She is 5 years old.

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2023;
const ageVasil = now - 1991;
const ageSarah = now - 2018

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; //
x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageVasil + ageSarah) / 2
console.log(ageVasil, ageSarah, averageAge);


const firstName = 'John';
const job = 'teacher';
const birthDate = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthDate) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthDate} years old ${job}!`;
console.log(jonasNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);



const age = 15;

if (age >= 18) {
      console.log('Sarah can start driving license 🚗'); // Combination for emoticons (CMND + CTR + SPACE);
} else {
      const yearsLeft = 18 - age;
      console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
};

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
      century = 20;
} else {
      century = 21;
};
console.log(century);



// Type Conversion
const inputYear = '1991'; // string
console.log(Number(inputYear), inputYear); // 1991 is converted to number
console.log(Number(inputYear) + 18); // Result is 2009

console.log(Number('Jonas')); // NaN
console.log(typeof Nan); // the weird result is number (invalid number)

console.log(String(23), 23); // Converted to number

// Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); // Result is 10
console.log('23' * '2');

let n = '1' + 1; // Converted to String
n = n - 1; // But here - automatically converted to number and devide -1
console.log(n); // The result is 10 ('10' + 1 = 11 - 1 = 10)



// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, Nan
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
      console.log("Don't spend it all ;)");
} else {
      console.log("You should get a job!");
}

let height = 0;
if (height) {
      console.log('Yay! Height is defined');
} else {
      console.log('Height is UNDEFINED');
}




// Equality Operators: == vs. ===
const age = "18";
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 --> FALSE
      console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
      console.log('7 is also a cool number!');
} else {
      console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?');





// Boolean Logic
// Basic Boolean Logic: THE AND, OR & NOT OPERATORS

// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense); // 

// if (hasDriversLicense && hasGoodVision) {
//       console.log('Sarah is able to drive!');
// } else {
//       console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
      console.log('Sarah is able to drive!');
} else {
      console.log('Someone else should drive...');
}


*/


// The switch Statement
const day = 'monday';

switch (day) {
      case 'monday': // day === 'monday'
            console.log('Plan course structure');
            console.log('Go to coding meetup');
            break;
      case 'tuesday':
            console.log('Prepare theory videos');
            break;
      case 'wednesday':
      case 'thursday':
            console.log('Write code examples');
            break;
      case 'friday':
            console.log('Record videos');
            break;
      case 'saturday':
      case 'sunday':
            console.log('Enjoy the weekend');
            break;
      default:
            console.log('Not a valid day!');
}

if (day === 'monday') {
      console.log('Plan course structure');
      console.log('Go to coding meetup');
} else if (day === 'tuesday') {
      console.log('Prepare thery videos');
} else if (day === 'wednesday' || day === 'thursday') {
      console.log('Write code examples');
} else if (day === 'friday') {
      console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
      console.log('Enjoy the weekend');
} else {
      console.log('Not a valid day!');
}