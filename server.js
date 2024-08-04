const express = require("express");
const path = require("path");
const sequelize = require("./controllers/database/dbConnection")
const explorerRoutes = require("./routes/explorer/explorerRoutes");

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.host = 'localhost';
        this.app.set('view engine', 'ejs');
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(express.urlencoded({extended: true}));
        this.startServer();
        this.routes();
    }
    routes() {
        this.app.use('/', explorerRoutes);
    }
    startServer() {
        this.app.listen(this.port, this.host, () => {
            console.log(`Server started at http://${this.host}:${this.port}`);
        })
    }
}

module.exports = Server;