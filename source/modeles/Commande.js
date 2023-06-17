const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');
const User = require('./User');

class Commande extends Model { }

Commande.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    tva: {
        type: DataTypes.DECIMAL(10, 2)
    },
    nb_product: {
        type: DataTypes.INTEGER
    },
    date_created: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.STRING(50)
    }
}, {
    sequelize,
    modelName: 'commande',
    freezeTableName: true,
    timestamps: false
});

Commande.belongsTo(User, {
    foreignKey: 'user_id',
    allowNull: false,
});


module.exports = Commande;