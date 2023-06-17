const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const Brand = require('./brand');
const Product = require('./Product');

class brandProduct extends Model { }

brandProduct.init({
    brand_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    modelName: 'brand_product',
    freezeTableName: true,
    timestamps: false
});

brandVille.belongsTo(Product, {
    foreignKey: 'product_id',
    allowNull: false,
});

brandVille.belongsTo(Brand, {
    foreignKey: 'brand_id',
    allowNull: false,
});


module.exports = brandProduct;