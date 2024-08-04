const { DataTypes } = require('sequelize')
const sequelize = require('../../controllers/database/dbConnection');

const ExplorerModel = sequelize.define('Explorer', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },  
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parentId: {
        type: DataTypes.UUID,
        allowNull: true
    }
}, {
    tableName: 'Explorer',
    timestamps: false
})

module.exports = ExplorerModel;