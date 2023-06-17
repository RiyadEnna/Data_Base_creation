const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const Product = require('./Product');

class ProductColor extends Model { }

ProductColor.init({
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,

        autoIncrement: false
    },
    color_code: {
        type: DataTypes.STRING(7),
        allowNull: true,
        charset: 'utf8mb3',
        primaryKey: true,
        collate: 'utf8mb3_unicode_ci'
    }
}, {
    sequelize,
    modelName: 'productcolor',
    freezeTableName: true,
    timestamps: false
});

ProductColor.belongsTo(Product, {
    foreignKey: 'product_id',
    allowNull: false,
});

module.exports = ProductColor;