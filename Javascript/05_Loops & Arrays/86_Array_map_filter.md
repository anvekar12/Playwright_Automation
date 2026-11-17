map() transforms every element and returns a new array of the same length.
filter() keeps only the elements that pass a test and returns a new array that may be shorter.
Neither one changes the original array.

const numbers = [1, 2, 3, 4, 5, 6];

// map: double each number
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10, 12]

// filter: keep only even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]

// Chained: double only the even numbers
const result = numbers.filter(n => n % 2 === 0).map(n => n * 2);
console.log(result); // [4, 8, 12]

console.log(numbers); // [1, 2, 3, 4, 5, 6] (original is unchanged)

