const express = require('express');
const router = express.Router();

// if we were to create our own logger middleware, instead of using an existing one like Morgan logger
// const logger = require('../middleware/logger');
// router.use(logger);

router.get('/about-me', (req, res) => {
  res.send('About me page');
});

router.get('/how-to-use', (req, res) => {
  res.send('How to use');
});

module.exports = router;