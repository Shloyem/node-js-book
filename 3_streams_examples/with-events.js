const fs = require('fs');
const readStream = fs.createReadStream('resources/text.txt');
const writeStream = fs.createWriteStream('resources/out.txt');
let dataLength = 0;
readStream.on('data', (chunk) => {
  console.log(`The length was:${dataLength} and add ${chunk.length} bytes`);
  dataLength += chunk.length;
})
readStream.on('end', () => { // done
  console.log(`The length was: ${dataLength} bytes`);
});
readStream.pipe(writeStream);