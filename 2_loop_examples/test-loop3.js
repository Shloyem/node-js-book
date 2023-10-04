console.log('First');
setImmediate(() => { console.log(`setImmediate Finished`) });
setTimeout(() => { console.log('setTimeout Finished'); }, 0);
console.log('Last');