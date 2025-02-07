import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Artist from './Artist.js';

const Song = sequelize.define('Song', {
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
    references: {
      model: Artist,
      key: 'id',
    },
  },
  releaseYear: {
    type: DataTypes.INTEGER,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
  coverUrl: {
    type: DataTypes.STRING,
  },
});

// Relación uno a muchos
Artist.hasMany(Song, { foreignKey: 'artistId' });
Song.belongsTo(Artist, { foreignKey: 'artistId' });

// Exportar el modelo
export default Song;
