const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class brand extends Model { }

brand.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    location: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'brand',
    freezeTableName: true,
    timestamps: false
});

module.exports = brand;