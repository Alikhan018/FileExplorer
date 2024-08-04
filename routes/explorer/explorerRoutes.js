const express = require("express");
const Controller = require("../../controllers/explorer/explorerController");

class ExplorerRoutes {
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', Controller.getAll)
        this.router.post('/add', Controller.addNode)
        this.router.post('/edit', Controller.editNode)
    }
}

module.exports = new ExplorerRoutes().router;