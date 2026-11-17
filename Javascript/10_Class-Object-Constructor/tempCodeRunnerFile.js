console.log("Enter name");
const data = require('fs').readFileSync(0, 'utf8');

const name = data.trim();
console.log(`Hello, ${name}!`);