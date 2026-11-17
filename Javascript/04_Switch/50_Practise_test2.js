// How to take Input from users

console.log("Enter name");
const data = require('fs').readFileSync(0, 'utf8');

const name = data.trim();
console.log(`Hello, ${name}!`);

// For the case of Input from user, you can run this script in the terminal and provide input.
// In the terminal: node "./filepath.js"
// Type your input and press Enter
// Press Ctrl+Z and then Enter to signal the end of input (on Windows) or Ctrl+D (on Unix/Linux).