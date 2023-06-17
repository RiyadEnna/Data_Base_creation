const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const carrier = require('./carriers');

class carrier extends Model { }

carrier.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255)
    },
    shipping_fee: {
        type: DataTypes.FLOAT
    }
}, {
    sequelize,
    modelName: 'carriers',
    freezeTableName: true,
    timestamps: false
});


module.exports = carrier;