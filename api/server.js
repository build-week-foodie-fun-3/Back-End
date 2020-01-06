const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const apiRouter = require('../api/api-router.js');
const usersRouter = require('../users/users-router.js');
const resturantRouter = require('../restaurants/restaurant-router.js');
const reviewRouter = require('../reviews/review-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', apiRouter);
server.use('/api', usersRouter);
server.use('/api/auth', resturantRouter);
server.use('/api/auth', reviewRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;