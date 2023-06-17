const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const Product = require('./Product');
const Family = require('./Family');

class ProductFamily extends Model { }

ProductFamily.init({
    id_produit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    id_famille: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    sequelize,
    modelName: 'product_family',
    freezeTableName: true,
    timestamps: false
});

ProductFamily.belongsTo(Product, {
    foreignKey: 'id_product',
    allowNull: false,
});

ProductFamily.belongsTo(Family, {
    foreignKey: 'id_famille',
    allowNull: false,
});

module.exports = ProductFamily;