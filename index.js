const express = require('express');

const server = express();

const users = ['Diego', 'Junior', 'Lucio'];

server.post('/users', (req, res) => {
  // Request body = { "name": "Junior" }
  const id = req.params.id;

  return res.json({ message: `Buscando o usuário ${id}` });
})

server.listen(3333);

