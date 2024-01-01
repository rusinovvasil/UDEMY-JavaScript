/*
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
Create an array called bills containing all 10 test bill values.
Create empty arrays for the tips and the totals(tips and totals)
Use the calcTip function we wrote before(included in the starter code) to calculate tips and total values(bill + tip) for every bill value in the bills array.Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:
Write a function calcAverage which takes an array called arr as an argument.This function calculates the average of all numbers in the given array.This is a DIFFICULT challenge(we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array.To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop.In each iteration, add the current value to the sum variable.This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array(because that's the number of elements).

Call the function with the totals array.

*/

function calcTip(bill) {
    return bill >= 50 && bill <= 300
        ? bill * 0.15
        : bill * 0.20
}

// 1. Function Definition: calcAverage
function calcAverage(arr) {
    let sum = 0; // 2. Initialize sum Variable and will store be used to store the sum of all elements in the array

    // 3. For Loop to calculate sum
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // add each element to the `sum` variable
    }
    return sum / arr.length; // 4. calculate average
}
// 5. Array of Bills
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// 6. Arrays for Tips and Totals
const tips = [];
const totals = [];

// 7. For Loop to Calculate Tips and Totals
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]))
    totals.push(tips[i] + bills[i])
}

// 8. Calculate Average of Totals
const average = calcAverage(totals);
// 9. Print Average to Console
console.log(`The average is: ${average}`);

