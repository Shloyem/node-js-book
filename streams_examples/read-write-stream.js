const fs = require('fs');
const readStream = fs.createReadStream('resources/text.txt');
const writeStream = fs.createWriteStream('resources/out.txt');
readStream.pipe(writeStream);