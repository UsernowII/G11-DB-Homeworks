import { DataTypes } from 'sequelize';
import { sequelize } from '../db/sequelize.js';
import { Artist } from './artist.model.js'; // Importar el modelo Artist

export const Song = sequelize.define('song', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    artistId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    coverUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
});

