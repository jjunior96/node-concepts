const express = require('express');

const server = express();

server.get('/users/:id', (req, res) => {
  // Route params = /users/1
  const id = req.params.id;

  return res.json({ message: `Buscando o usuário ${id}` });
})

server.listen(3333);

