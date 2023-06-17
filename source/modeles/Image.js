const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class Image extends Model { }


Image.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    chemin: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    date_creation: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'image',
    freezeTableName: true,
    timestamps: false
});
module.exports = Image;