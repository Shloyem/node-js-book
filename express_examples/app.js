// const fs = require('fs');
// const path = require('path');
const morgan = require('morgan');
const express = require('express');
const help = require('./src/routes/help');
const user = require('./src/routes/user');

const app = express();
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.use(morgan('common'));

app.use('/user', user);

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
