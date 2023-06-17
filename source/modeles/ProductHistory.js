const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const Product = require('./Product');

class ProductHistory extends Model { }

ProductHistory.init({
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    version: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    },
    content: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'product_history',
    freezeTableName: true,
    timestamps: false
});

ProductHistory.belongsTo(Product, {
    foreignKey: 'product_id',
    allowNull: false,
});

module.exports = ProductHistory;