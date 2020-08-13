const express = require('express');

const server = express();

server.get('/', (req, res) => {
  // Query params = ?teste=1
  const name = req.query.name;

  return res.json({ name: name });
})

server.listen(3333);

