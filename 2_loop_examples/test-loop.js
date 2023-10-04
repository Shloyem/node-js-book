const fs = require('fs');
console.log('First');
//File I/O operation
fs.readFile('test.txt', 'utf-8', (data) => {
  console.log('Reading data 1');
});
fs.readFile('test.txt', 'utf-8', (data) => {
  console.log('Reading data 2');
});
fs.readFile('test.txt', 'utf-8', (data) => {
  console.log('Reading data 3');
});
fs.readFile('test.txt', 'utf-8', (data) => {
  console.log('Reading data 4');
});
setTimeout(() => { console.log('setTimeout Finished'); }, 0);
console.log('Last');