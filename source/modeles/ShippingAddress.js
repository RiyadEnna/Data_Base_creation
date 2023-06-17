const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const User = require('./users');

class ShippingAddress extends Model { }

ShippingAddress.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    street_address: {
        type: DataTypes.STRING(255)
    },
    postal_code: {
        type: DataTypes.STRING(10)
    },
    city: {
        type: DataTypes.STRING(255)
    },
    longitude: {
        type: DataTypes.DECIMAL(9, 6)
    },
    latitude: {
        type: DataTypes.DECIMAL(9, 6)
    }
}, {
    sequelize,
    modelName: 'shipping_address',
    freezeTableName: true,
    timestamps: false
});

ShippingAddress.belongsTo(User, {
    foreignKey: 'user_id',
    allowNull: false,
});

module.exports = ShippingAddress;