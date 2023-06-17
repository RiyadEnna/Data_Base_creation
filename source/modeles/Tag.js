const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class Tag extends Model { }

Tag.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    creted: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'tag',
    freezeTableName: true,
    timestamps: false
});

module.exports = Tag;
