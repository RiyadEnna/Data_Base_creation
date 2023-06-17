const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const Product = require('./Product');

class TagProduit extends Model { }

TagProduit.init({
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tag_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    sequelize,
    modelName: 'tag_produit',
    freezeTableName: true,
    timestamps: false
});

TagProduit.belongsTo(Product, {
    foreignKey: 'product_id',
    allowNull: false,
});

module.exports = TagProduit;

