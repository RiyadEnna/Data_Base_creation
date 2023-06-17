const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class Product extends Model { }

Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    enable: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false
    },
    latitude_produit: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    longitude_produit: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize,
    modelName: 'product',
    freezeTableName: true,
    timestamps: false
});

module.exports = Product;