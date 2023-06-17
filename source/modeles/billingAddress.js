const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const User = require('./User');
class billingAddress extends Model { }

billingAddress.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    street_address: { type: DataTypes.STRING(255) },
    postal_code: { type: DataTypes.STRING(10) },
    city: { type: DataTypes.STRING(255) },
    longitude: { type: DataTypes.FLOAT },
    latitude: { type: DataTypes.FLOAT }
}, {
    sequelize,
    modelName: 'billing_address',
    freezeTableName: true,
    timestamps: false
});

billingAddress.belongsTo(User, {
    foreignKey: 'user_id',
    allowNull: false,
});
module.exports = billingAddress;