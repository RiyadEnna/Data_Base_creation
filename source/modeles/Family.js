const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class Family extends Model { }


Family.init({
    id_famille: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_famille: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    date_creation: {
        type: DataTypes.DATE,
        allowNull: false
    },
    date_modification: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_famille_parent: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'family',
    freezeTableName: true,
    timestamps: false
});

Family.belongsTo(Family, {
    foreignKey: 'id_famille_parent',
    allowNull: false,
});

module.exports = Family;