const express = require('express');
const app = express();
app.get('/greet', function ({ query }, res) {
  res.status(200).json({
    hello: query.name
  });
});
module.exports = { app }