const express = require('express');
const projectsRouter = require('./routers/projects/projects');
const resourcesRouter = require('./routers/resources/resources');
const tasksRouter = require('./routers/tasks/tasks');
const projectResourcesRouter = require('./routers/project_resources/project_resources');

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);
server.use('/api/project-resources', projectResourcesRouter);

module.exports = server;