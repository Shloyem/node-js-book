const { promises: fs } = require('fs');
async function getLineCount(path) {
  const str = await fs.readFile(path, { encoding: 'uft-8' });
  return str.split('\n').length;
}
module.exports = { getLineCount }