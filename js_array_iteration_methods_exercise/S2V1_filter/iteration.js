const numbers = [1,2,3,4,5,6,7,8,9,10];
    // Result: [2,4,6,8,10]

const evens = numbers.filter(number => number % 2 === 0);

console.log(evens);

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20;

// century20 should be: [1989, 2000, 1999, 1973]
// Write your code below

century20 = years.filter( year => String(year).charAt(0) === '2');

console.log()