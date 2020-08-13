const express = require('express');

const server = express();
server.use(express.json());

const users = ['Diego', 'Junior', 'Lucio'];

// Listagem de todos os usuarios
server.get('/users', (req, res) => {
  return res.json(users);
});

// Listagem de um usuario especifico
server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

// Criacao de um usuario
server.post('/users', (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

// Edicao de um usuario
server.put('/users/:index', (req, res) => {
  // Pego o index
  const { index } = req.params;
  // Pego o nome do usuario
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

// Exclusao de um usuario
server.delete('/users/:index', (req, res) => {
  const { index } = req.body;

  users.splice(index, 1);

  return res.json(users);
})

server.listen(3333);

