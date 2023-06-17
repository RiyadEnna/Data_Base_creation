const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING(60)
    },
    prenom: {
        type: DataTypes.STRING(60)
    },
    age: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING(60)
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    enable: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    date_created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    date_auth: {
        type: DataTypes.DATE
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    date_updated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    role: {
        type: DataTypes.ENUM('classique_user', 'admin', 'super-admin'),
        defaultValue: 'classique_user'
    }
}, {
    sequelize,
    modelName: 'users',
    freezeTableName: true,
    timestamps: false
});

module.exports = User;