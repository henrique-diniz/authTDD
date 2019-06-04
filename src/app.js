const express = require("express");

class AppController {
  constructor() {
    this.express = express();
    this.middlewatres();
    this.routes();
  }

  middlewatres() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new AppController().express;
