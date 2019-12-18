const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//import Router path(s)

const  = require();
const  = require();

//server
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


//endpoint(s)
server.use('/api/);
server.use('/api/);

server.get('/', (req, res) => {
  res.send('It works');
});

module.exports = server;