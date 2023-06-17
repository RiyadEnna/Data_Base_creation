const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class Comments extends Model { }

Comments.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER
    },
    content: {
        type: DataTypes.TEXT
    },
    readed: {
        type: DataTypes.BOOLEAN
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    created: {
        type: DataTypes.DATE
    },
    avis: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'comments',
    freezeTableName: true,
    timestamps: false
});

module.exports = Comments;