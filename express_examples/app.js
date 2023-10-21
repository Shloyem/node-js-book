const fs = require('fs');
const express = require('express');
const path = require('path');
const help = require('./src/routes/help');
const morgan = require('morgan');

const app = express();
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.use(morgan('common'));

app.use('/help', help);

// without using a router:
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// app.get('/cool', (req, res) => { // Basic not recommended example
//   fs.createReadStream(path.join(__dirname,
//     './src/static/index.html')).pipe(res);
// });
// app.get('/moshe', (req, res) => {
//   res.send('Hello Moshe!');
// });
// app.post('/', (req, res) => {
//   res.send('Hello POST!');
// });
