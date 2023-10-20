const netServer = require('net').Server;

class SocketDateReporterServer extends netServer {
  constructor() {
    super();
    this.listen('6969');
    this.on('connection', this.connectionHandler);
  }
  connectionHandler(socket) {
    console.log(`Someone connected! ${socket.remoteAddress}`);
    this.socket = socket;
    this.socket.write(`Welcome to my server`);
    this.repeater();
  }

  repeater() {
    const interval = 1000; //ms

    setInterval(() => {
      const current_time = new Date().toLocaleTimeString('en-IL', { hour12: false });
      this.socket.write(`The time is ${current_time}\n`);
    }, interval);
  }
}

module.exports = new SocketDateReporterServer();