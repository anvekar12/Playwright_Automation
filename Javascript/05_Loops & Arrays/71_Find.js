let nums = [10,25,30,45];
let result = nums.find(temp => temp > 20);
console.log(result);

// findIndex
let index = nums.findIndex(n => n > 20);
console.log(index);

let last = nums.findLast(n => n > 20);
console.log(last);

let lastIndex = nums.findLastIndex(n => n > 20);
console.log(lastIndex);