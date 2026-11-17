// Table print using sys.out.printf

// For the case of Input from user, you can run this script in the terminal and provide input.
// In the terminal: node "./filepath.js"
// Type your input and press Enter
// Press Ctrl+Z and then Enter to signal the end of input (on Windows) or Ctrl+D (on Unix/Linux).

console.log("Enter a number");
const data = require('fs').readFileSync(0, 'utf8');

const num = Number(data.trim());

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}