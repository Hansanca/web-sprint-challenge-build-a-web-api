const express = require('express');
const server = express();
const projectRoutes = require('./projects/projects-router')
const actionRoutes = require('./actions/actions-router')

server.use(express.json())

server.use('/api/projects', projectRoutes)
server.use('/api/actions', actionRoutes)

module.exports = server;
