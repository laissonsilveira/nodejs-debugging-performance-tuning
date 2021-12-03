const app = require('./app');
const http = require('http');
const config = require('./config');
const logger = require('../shared/lib/logger');

const server = http.Server(app);

server
  .listen(config.server.port)
  .on('listening', () => logger.info(`HTTP server listening on port ${config.server.port}`));

const { Server } = require('socket.io');
const io = new Server(server);
io.on('connection', function (socket) {
  logger.info(`a user connected | socket id ${socket.id}`);
  socket.on('disconnect', function () {
    logger.info(`a user disconnected | socket id ${socket.id}`);
  });
  socket.on('new_game', () => {
    logger.info('socker server new game...');
    setTimeout(() => {
      io.emit('new_game');
    }, 1500);
  });
  socket.on('join', () => {
    logger.info('socker server join...');
    setTimeout(() => {
      io.emit('join');
    }, 1500);
  });
  socket.on('choice_option', choice => {
    logger.info(`socker server choice option ${choice} was clicked...`);
    setTimeout(() => {
      io.emit('choice_option');
    }, 1500);
  });
});