//const fetch = require('node-fetch'); // node-fetch module has been converted to an ECMAScript module (ESM) in its version 3.x. 
// This means that you can't use require() to import it anymore. 
// Instead, you need to use a dynamic import() statement, which is available in all CommonJS modules

async function getElementorRepoStarCount() {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default

  const response = await
    fetch('https://api.github.com/repos/elementor/elementor');

  if (!response.ok)
    throw new Error(`HTTP status '${response.status}'`);

  const json = await response.json();
  console.log({ json });

  return json.stargazers_count;
}

module.exports = { getElementorRepoStarCount }