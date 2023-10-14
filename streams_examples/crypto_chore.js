const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const password = 'Password used to generate key';
const key = crypto.scryptSync(password, 'SomeSalt', 32);
const iv = 'myIVstringisnice1'.toString('hex').slice(0, 16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
const readStream = fs.createReadStream('resources/text.txt');
const writeStream = fs.createWriteStream('resources/encrypted.txt');
readStream.pipe(cipher).pipe(writeStream)

writeStream.on('finish', () => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  const readDecipherStream = fs.createReadStream('resources/encrypted.txt');
  const writeDecipherStream = fs.createWriteStream('resources/decrypted.txt');

  readDecipherStream.pipe(decipher).pipe(writeDecipherStream);
});