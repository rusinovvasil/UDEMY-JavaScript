///////////////////////////////

// Coding Challenge #1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (arr) {
  // 1. Create an Empty String
  let forecastStr = '';

  // 2. Iterate Over the Array and build the forecast String
  for (let i = 0; i < arr.length; i++) {
    forecastStr += `... ${arr[i]}°C in ${i + 1} days`;
  }
  // Log the Forecast String
  console.log(forecastStr);
};
// TEST DATA 1
printForecast([17, 21, 23]);

// TEST DATA 2
printForecast([12, 5, -5, 0, 4]);
