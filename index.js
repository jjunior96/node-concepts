const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.json({ test: "Foi" });
})

server.listen(3333);