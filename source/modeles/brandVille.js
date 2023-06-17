const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const Brand = require('./brand');
const VilleFrance = require('./VilleFrance');

class brandVille extends Model { }

brandVille.init({
    ville_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    brand_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'brand_ville',
    freezeTableName: true,
    timestamps: false
});

brandVille.belongsTo(VilleFrance, {
    foreignKey: 'ville_id',
    allowNull: false,
});

brandVille.belongsTo(Brand, {
    foreignKey: 'brand_id',
    allowNull: false,
});


module.exports = brandVille;