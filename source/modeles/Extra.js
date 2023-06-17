const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class Extra extends Model { }

Extra.init({
    poids: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longeur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    largeur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    sequelize,
    modelName: 'extra',
    freezeTableName: true,
    timestamps: false
});


module.exports = Extra;