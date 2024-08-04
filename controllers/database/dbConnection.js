const { Sequelize } = require('sequelize');

class DatabaseConnection {
    constructor() {
        this.sequelize = new Sequelize('FileExplorer', 'postgres', '123', {
            dialect: 'postgres'
        })
        this.connect();
    }
    async connect() {
        try{
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (err) {
            console.log('Unable to connect to the database:', err);
        }
    }
}
module.exports = new DatabaseConnection().sequelize;