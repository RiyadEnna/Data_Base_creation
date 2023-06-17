const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const Product = require('./Product');

class ProductPromotion extends Model { }

ProductPromotion.init({
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    promotion_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'product_promotion',
    freezeTableName: true,
    timestamps: false
});

ProductPromotion.belongsTo(Product, {
    foreignKey: 'product_id',
    allowNull: false,
});

module.exports = ProductPromotion;