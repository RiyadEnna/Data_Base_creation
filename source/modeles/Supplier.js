const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const VilleFrance = require('./VilleFrance');

class Supplier extends Model { }

Supplier.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255)
    },
    adress_id: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize,
    modelName: 'supplier',
    freezeTableName: true,
    timestamps: false
});

Supplier.belongsTo(VilleFrance, {
    foreignKey: 'adress_id',
    allowNull: false,
});

module.exports = Supplier;
