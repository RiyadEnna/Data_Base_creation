const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class Feature extends Model { }


Feature.init({
    feature_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    attribute_name: {
        type: DataTypes.STRING(255)
    },
    attribute_value: {
        type: DataTypes.STRING(255)
    }
}, {
    sequelize,
    modelName: 'feature',
    freezeTableName: true,
    timestamps: false
});
module.exports = Feature;