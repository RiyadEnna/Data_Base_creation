const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const Product = require('./Product');
const Feature = require('./Feature');

class ProductFeature extends Model { }

ProductFeature.init({
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    feature_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    }
}, {
    sequelize,
    modelName: 'product_feature',
    freezeTableName: true,
    timestamps: false
});

ProductFeature.belongsTo(Product, {
    foreignKey: 'id_product',
    allowNull: false,
});

module.exports = ProductFeature;