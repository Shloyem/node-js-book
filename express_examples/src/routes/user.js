const express = require('express');
const router = express.Router();

// enter http://localhost:3000/user/moshe for example
router.get('/:name', (req, res) => {
  res.send(`User ${req.params.name} entered the system`);
});

// enter http://localhost:3000/user/moshe/999 for example
router.get('/:name/:id', (req, res) => {
  res.send(`User ${req.params.name} entered the system. The ID is
${req.params.id}`);
});

module.exports = router;