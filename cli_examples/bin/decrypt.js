#!/usr/bin/env node
const EncryptionCLI = require('../module');

const sourceFileName = process.argv[2];
console.log(`Source from decryption is: ${sourceFileName}`);
EncryptionCLI.decrypt(sourceFileName);

// Run indipendently:
// - Can run with node .\cli_examples\bin\decrypt.js ./resources/text.txt

// Make the module run globally from anywhere in the computer with the "encrypt" command:
// 1. Can add to package.json
// "bin": {
//   "decrypt": ".\cli_examples\bin\decrypt.js"
// }
// 2. To install it globally (while our module is not on npm) we run from the main project folder:
//    npm link
// 3. Run from anywhere:
//    encrypt "C:\Programming\JS\NodeJs\node-js-book\resources\text.txt"