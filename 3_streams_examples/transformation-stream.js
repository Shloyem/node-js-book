const fs = require('fs');
const zlib = require('zlib');
const readStream = fs.createReadStream('resources/text.txt');
const writeStream = fs.createWriteStream('resources/out.gz');
const gzip = zlib.createGzip();
readStream.pipe(gzip).pipe(writeStream);