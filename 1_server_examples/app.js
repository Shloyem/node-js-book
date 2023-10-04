const util = require('util');
const fs = require('fs');
const httpServer = require('http').Server;
//const readFile = util.promisify(fs.readFile); alternative to fs.promises.readFile('resources/text.txt'); 

class MyServer extends httpServer {
  constructor() {
    super();
    this.listen(3000);
    this.on('connection', this.connectionHandler);
    this.on('request', this.requestHandler);
  }
  async requestHandler(request, response) {
    const result = await fs.promises.readFile('resources/text.txt');
    response.end(result);
  }
  connectionHandler() {
    console.log('Connection created!');
  }
}
const myServer = new MyServer();