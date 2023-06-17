const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const User = require('./User');
const VilleFrance = require('./VilleFrance');


class AdresseFacturation extends Model { }

AdresseFacturation.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    pays: { type: DataTypes.STRING(50) },
    region: { type: DataTypes.STRING(50) },
    code_postal: { type: DataTypes.STRING(10) },
    adresse: { type: DataTypes.STRING(100) },
    ville_id: { type: DataTypes.INTEGER },
    latitude: { type: DataTypes.DECIMAL(9, 6) },
    longitude: { type: DataTypes.DECIMAL(9, 6) }
}, {
    sequelize,
    modelName: 'adresses_facturation',
    freezeTableName: true,
    timestamps: false
});

AdresseFacturation.belongsTo(User, {
    foreignKey: 'user_id',
    allowNull: false,
});
module.exports = AdresseFacturation;