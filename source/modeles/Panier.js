const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const Product = require('./Product');
const User = require('./User');

class Panier extends Model { }

Panier.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    id_produit: {
        type: DataTypes.INTEGER
    },
    nb_produit: {
        type: DataTypes.INTEGER
    },
    promotion_id: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'panier',
    freezeTableName: true,
    timestamps: false
});

Panier.belongsTo(Product, {
    foreignKey: 'id_produit',
    allowNull: false,
});

Panier.belongsTo(User, {
    foreignKey: 'id_user',
    allowNull: false,
});


module.exports = Panier;