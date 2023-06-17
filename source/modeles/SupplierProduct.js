const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const Supplier = require('./Supplier');
const Product = require('./Product');


class SupplierProduct extends Model { }

SupplierProduct.init({
    supplier_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    sequelize,
    modelName: 'supplier_product',
    freezeTableName: true,
    timestamps: false
});

SupplierProduct.belongsTo(Supplier, {
    foreignKey: 'supplier_id',
    allowNull: false,
});

SupplierProduct.belongsTo(Product, {
    foreignKey: 'product_id',
    allowNull: false,
});

module.exports = SupplierProduct;