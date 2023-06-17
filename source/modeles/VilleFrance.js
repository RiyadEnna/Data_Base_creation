const sequelize = require('../utils/database').sequelize;
const { DataTypes, Model } = require('sequelize');

class VilleFrance extends Model { }

VilleFrance.init({
    ville_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    ville_departement: {
        type: DataTypes.STRING(3)
    },
    ville_slug: {
        type: DataTypes.STRING(255)
    },
    ville_nom: {
        type: DataTypes.STRING(45)
    },
    ville_nom_simple: {
        type: DataTypes.STRING(45)
    },
    ville_nom_reel: {
        type: DataTypes.STRING(45)
    },
    ville_nom_soundex: {
        type: DataTypes.STRING(20)
    },
    ville_nom_metaphone: {
        type: DataTypes.STRING(22)
    },
    ville_code_postal: {
        type: DataTypes.STRING(255)
    },
    ville_commune: {
        type: DataTypes.STRING(3)
    },
    ville_code_commune: {
        type: DataTypes.STRING(5),
        allowNull: false,
        unique: true
    },
    ville_arrondissement: {
        type: DataTypes.SMALLINT.UNSIGNED
    },
    ville_canton: {
        type: DataTypes.STRING(4)
    },
    ville_amdi: {
        type: DataTypes.SMALLINT.UNSIGNED
    },
    ville_population_2010: {
        type: DataTypes.INTEGER.UNSIGNED
    },
    ville_population_1999: {
        type: DataTypes.INTEGER.UNSIGNED
    },
    ville_population_2012: {
        type: DataTypes.INTEGER.UNSIGNED
    },
    ville_densite_2010: {
        type: DataTypes.INTEGER
    },
    ville_surface: {
        type: DataTypes.FLOAT
    },
    ville_longitude_deg: {
        type: DataTypes.FLOAT
    },
    ville_latitude_deg: {
        type: DataTypes.FLOAT
    },
    ville_longitude_grd: {
        type: DataTypes.STRING(9)
    },
    ville_latitude_grd: {
        type: DataTypes.STRING(8)
    },
    ville_longitude_dms: {
        type: DataTypes.STRING(9)
    },
    ville_latitude_dms: {
        type: DataTypes.STRING(8)
    },
    ville_zmin: {
        type: DataTypes.INTEGER
    },
    ville_zmax: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'villes_france_free',
    freezeTableName: true,
    timestamps: false
});

module.exports = VilleFrance;