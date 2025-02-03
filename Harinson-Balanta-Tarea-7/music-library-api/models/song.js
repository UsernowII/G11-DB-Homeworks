'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    static associate(models) {
      Song.belongsTo(models.Artist, { foreignKey: 'artistId' });
    }
  }

  Song.init({
    title: DataTypes.STRING,
    artistId: DataTypes.INTEGER,
    releaseYear: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    coverUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Song',
  });

  return Song;
  
};
