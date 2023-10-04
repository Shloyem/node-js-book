const httpServer = require('http').Server;
const fs = require('fs');
class MyServer extends httpServer {
  constructor() {
    super();
    this.listen(3000);
    this.on('request', this.requestHandler);
  }
  requestHandler(request, response) {
    console.log(`Start`);
    const src = fs.createReadStream('resources/text.txt');
    src.pipe(response);
    console.log(`End`);
  }
}
const myServer = new MyServer();