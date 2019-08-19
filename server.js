const express = require('express');
const projectsRouter = require('./routers/projects/projects');
const resourcesRouter = require('./routers/resources/resources');

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);

module.exports = server;