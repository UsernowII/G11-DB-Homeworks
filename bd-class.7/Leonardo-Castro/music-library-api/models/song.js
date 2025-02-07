const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Artist = require('./Artist');

const Song = sequelize.define('Song', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    artistId: {
        type: DataTypes.INTEGER,
        references: {
            model: Artist,
            key: 'id'
        }
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    coverUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Song;
