const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class Promotion extends Model { }

Promotion.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(100)
    },
    taux: {
        type: DataTypes.DECIMAL(10, 2)
    },
    enable: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'promotion',
    freezeTableName: true,
    timestamps: false
});
module.exports = Promotion;