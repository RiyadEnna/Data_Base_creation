const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const User = require('./User');
const Carrier = require('./carriers');

class clientCarrier extends Model { }

clientCarrier.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    users_id: {
        type: DataTypes.INTEGER
    },
    carrier_id: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'client_carriers',
    freezeTableName: true,
    timestamps: false
});

clientCarrier.belongsTo(User, {
    foreignKey: 'users_id',
    allowNull: false,
});

clientCarrier.belongsTo(Carrier, {
    foreignKey: 'carrier_id',
    allowNull: false,
});

module.exports = clientCarrier;